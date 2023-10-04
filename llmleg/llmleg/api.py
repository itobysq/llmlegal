import requests
import keyring


def get_llm_response(input_text: str) -> requests.Response:
    """Get response from the llm

    Args:
        input_text (str): Input prompt to the API

    Returns:
        requests.Response: response from the API
    """
    apikey = keyring.get_password("palm2", username="palm2")
    url = f"https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key={apikey}"
    payload = {"prompt": {"text": input_text}}
    headers = {"Content-Type": "application/json"}

    response = requests.post(url, json=payload, headers=headers)

    # If you want the response as a JSON object
    data = response.json()

    # If you just want the text from the response
    text = response.text

    return response
