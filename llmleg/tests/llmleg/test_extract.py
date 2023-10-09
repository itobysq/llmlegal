from llmleg import extract


def test_extract():
    text = extract.load_text()
    assert text is not None
