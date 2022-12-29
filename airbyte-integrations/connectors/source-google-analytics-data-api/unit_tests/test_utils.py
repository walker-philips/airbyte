#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#

import datetime

import pytest
from source_google_analytics_data_api import utils


@pytest.mark.parametrize(
    "date_time, expected_seconds",
    [
        (datetime.datetime(2022, 1, 1, tzinfo=datetime.timezone.utc), 1640995200),
        (datetime.datetime(2023, 1, 1, tzinfo=datetime.timezone.utc), 1672531200),
    ]
)
def test_datetime_to_secs(date_time, expected_seconds):
    assert utils.datetime_to_secs(date_time) == expected_seconds


@pytest.mark.parametrize(
    "date_time, date_time_format, expected_date",
    [
        (
                "2022-01-01",
                "%Y-%m-%d",
                datetime.date(2022, 1, 1)
        ),
        (
                '2023-12-12T00:00:00.00+00:00',
                "%Y-%m-%dT%H:%M:%S.%f%z",
                datetime.date(2023, 12, 12)
        )
    ]
)
def test_string_to_date(date_time, date_time_format, expected_date):
    assert utils.string_to_date(date_time, date_time_format) == expected_date


@pytest.mark.parametrize(
    "date_time, date_time_format, expected_date",
    [
        (
                datetime.date(2022, 1, 1),
                "%Y-%m-%d",
                "2022-01-01"
        ),
        (
                datetime.date(2023, 12, 12),
                "%Y-%m-%dT%H:%M:%S.%f",
                '2023-12-12T00:00:00.000000'
        )
    ]
)
def test_date_to_string(date_time, date_time_format, expected_date):
    assert utils.date_to_string(date_time, date_time_format) == expected_date
