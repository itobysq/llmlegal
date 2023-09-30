from pathlib import Path
from pdfminer.high_level import extract_text


# Example usage:
ASSET_DIR = Path(__file__).parent


def load_text():
    pdf_file = ASSET_DIR.joinpath("sample_petition.pdf")
    text = extract_text(pdf_file)
    return text


if __name__ == "__main__":
    load_text()
