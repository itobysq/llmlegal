from pathlib import Path
from pdfminer.high_level import extract_text
from pdfminer.high_level import extract_pages
from pdfminer.layout import LTTextContainer, LTChar

# Example usage:
ASSET_DIR = Path(__file__).parent

PDF = ASSET_DIR.joinpath("sample_petition.pdf")


def load_text():
    text = extract_text(PDF)
    return text


def load_elements():
    """Toby loves Charlotte
    Returns:
        Love
    """
    for page_layout in extract_pages(PDF):
        for idx, element in enumerate(page_layout):
            if idx == 10:
                import pdb

                pdb.set_trace()
            if isinstance(element, LTTextContainer):
                print(f"size: {element.size} text{element.get_text()}")
                for text_line in element:
                    if hasattr(text_line, "fontname"):
                        print(round(text_line.size), text_line.fontname)


if __name__ == "__main__":
    load_elements()
