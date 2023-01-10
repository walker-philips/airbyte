/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.workers.internal;

import static io.airbyte.metrics.lib.ApmTraceConstants.WORKER_OPERATION_NAME;

import datadog.trace.api.Trace;
import io.airbyte.commons.logging.MdcScope;
import io.airbyte.metrics.lib.MetricClientFactory;
import io.airbyte.metrics.lib.OssMetricsRegistry;
import io.airbyte.protocol.models.AirbyteMessage;
import io.airbyte.workers.internal.exception.DestinationException;
import java.io.BufferedReader;
import java.nio.charset.StandardCharsets;
import java.util.stream.Stream;

public class DestinationStreamFactory extends DefaultAirbyteStreamFactory {

  public DestinationStreamFactory(MdcScope.Builder containerLogMdcBuilder) {
    super(containerLogMdcBuilder);
  }

  @Trace(operationName = WORKER_OPERATION_NAME)
  @Override
  public Stream<AirbyteMessage> create(final BufferedReader bufferedReader) {
    final var metricClient = MetricClientFactory.getMetricClient();
    return bufferedReader
        .lines()
        .peek(str -> metricClient.distribution(OssMetricsRegistry.JSON_STRING_LENGTH, str.length()))
        .peek(str -> {
          long messageSize = str.getBytes(StandardCharsets.UTF_8).length;
          if (messageSize > /* 16L/ **//**/Runtime.getRuntime().maxMemory() * 0.6/**/) {
            throw new DestinationException("too big message");
          }
        })
        .flatMap(this::parseJson)
        .filter(this::validate)
        .flatMap(this::toAirbyteMessage)
        .filter(this::filterLog);
  }

}
