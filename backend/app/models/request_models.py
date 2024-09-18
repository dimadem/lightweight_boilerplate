from typing import List, Optional
from pydantic import BaseModel, Field
from utils.prompt import ClientMessage

class AnthropicRequest(BaseModel):
    messages:       List[ClientMessage]
    system_message: str = Field(default="You are a helpful assistant.")
    model:          str = Field(default="claude-3-haiku-20240307")
    max_tokens:     int = Field(default=1000)
    temperature:    float = Field(default=0.0)
    top_p:          float = Field(default=0.0)
    top_k:          int = Field(default=0)
    image:          Optional[str] = None
    image_type:     Optional[str] = None