package io.airbyte.integrations.destination.staging;

import static org.junit.jupiter.api.Assertions.*;

import io.airbyte.commons.exceptions.ConfigErrorException;
import io.airbyte.integrations.destination.jdbc.WriteConfig;
import java.util.List;
import org.junit.jupiter.api.Test;

class StagingConsumerFactoryTest {

  @Test()
  void detectConflictingStreams() {
    final StagingConsumerFactory f = new StagingConsumerFactory();

    final ConfigErrorException configErrorException = assertThrows(
        ConfigErrorException.class,
        () -> f.flushBufferFunction(
            null,
            null,
            List.of(
                new WriteConfig("source_schema1", "example_stream", "destination_default_schema", null, null, null),
                new WriteConfig("source_schema2", "example_stream", "destination_default_schema", null, null, null)
            ),
            null
        ));

    assertEquals(
        "You are trying to write multiple streams to the same table. Consider switching to a custom namespace format using ${SOURCE_NAMESPACE}, or moving one of them into a separate connection with a different stream prefix. Affected streams: source_schema1.example_stream, source_schema2.example_stream",
        configErrorException.getMessage()
    );
  }

}
