# backend/main.py
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
from fastapi.security import OAuth2PasswordBearer
from typing import Dict
import uuid

app = FastAPI()

# 允许前端请求的域名
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# 模型
class MessageRequest(BaseModel):
    text: str

class MessageResponse(BaseModel):
    message_id: str
    text: str
    response: str
    timestamp: datetime

@app.post("/messages")
# demo省略掉token验证
# async def post_message(request: MessageRequest, token: str = Depends(oauth2_scheme)) -> Dict[str, MessageResponse]:
async def post_message(request: MessageRequest):
    response_text = f"听到了：{request.text}，愿你心情慢慢变好 ❤️"
    return {
        "data": {
            "message_id": str(uuid.uuid4()),
            "text": request.text,
            "response": response_text,
            "timestamp": datetime.utcnow()
        }
    }
