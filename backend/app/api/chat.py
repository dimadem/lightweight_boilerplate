from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from models.request_models import AnthropicRequest
from services.anthropic_service import anthropic_response
from core.logging import logger

router = APIRouter()

def log_request(request: AnthropicRequest):
    logger.info(f"Received request: ")
    logger.info(f"Model:            {request.model}")
    logger.info(f"Max tokens:       {request.max_tokens}")
    logger.info(f"Temperature:      {request.temperature}")
    logger.info(f"Top P:            {request.top_p}")
    logger.info(f"Top K:            {request.top_k}")
    logger.info(f"System message:   {request.system_message}")
    logger.info(f"Image type:       {request.image_type}")
    logger.info(f"Messages count:   {len(request.messages)}")
    logger.info(f"Last message:     {request.messages[-1].content}")

@router.post("/api/chat")
async def handle_chat_data(request: AnthropicRequest):
    log_request(request)
    response = StreamingResponse(anthropic_response(request), media_type="plain/text")
    return response