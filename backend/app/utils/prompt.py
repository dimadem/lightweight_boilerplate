from pydantic import BaseModel

class ClientMessage(BaseModel):
    role: str
    content: str

def convert_to_anthropic_message(message: ClientMessage):
    return {
        "role": message.role,
        "content": message.content
    }