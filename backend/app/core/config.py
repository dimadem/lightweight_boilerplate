import os
from dotenv import load_dotenv

load_dotenv(".env")

ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY")