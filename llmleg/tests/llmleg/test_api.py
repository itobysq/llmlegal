import pytest
from llmleg import api


@pytest.mark.integration
def test_get_llm_response():
    resp = api.get_llm_response("compare chat gpt with palm2")
    assert resp.ok
