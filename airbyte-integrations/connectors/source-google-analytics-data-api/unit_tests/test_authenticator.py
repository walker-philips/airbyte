#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#

from unittest.mock import MagicMock

import jwt
import requests
from freezegun import freeze_time
from source_google_analytics_data_api.authenticator import GoogleServiceKeyAuthenticator


@freeze_time("2023-01-01 00:00:00")
def test_token_rotation(requests_mock):
    credentials = {
        "client_email": "client_email",
        "private_key": "private_key",
        "client_id": "client_id"
    }
    authenticator = GoogleServiceKeyAuthenticator(credentials)

    auth_request = requests_mock.register_uri("POST",
                                              authenticator._google_oauth2_token_endpoint,
                                              [{"json": {"access_token": "bearer_token", "expires_in": 3600},
                                                "status_code": 200}])

    simple_request = requests.Request()
    jwt_encode_mock = MagicMock(return_value="encoded_assertion")
    jwt.encode = jwt_encode_mock
    authenticated_request = authenticator(simple_request)
    assert auth_request.call_count == 1
    assert auth_request.last_request.qs.get("assertion") == ["encoded_assertion"]
    assert auth_request.last_request.qs.get("grant_type") == ["urn:ietf:params:oauth:grant-type:jwt-bearer"]
    assert authenticator._token.get("expires_at") == 1672534800
    assert authenticated_request.headers.get("Authorization") == "Bearer bearer_token"
