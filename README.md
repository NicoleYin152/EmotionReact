# 🧠 EmotionChat 情感对话平台

一个基于 React + FastAPI 构建的原型平台，用于支持 AI 情感陪伴对话。该项目演示了前后端分离、微服务设计、API 构建与容器化部署等核心工程能力。

---

## 🛠 技术栈

- **前端**：React + MUI
- **后端**：FastAPI + Pydantic
- **依赖管理**：npm / pip + requirements.txt

---

## 📁 项目结构

```
emotion-project/
├── backend/                 # FastAPI 后端
│   ├── main.py              # 主应用逻辑
│   └── requirements.txt     # Python依赖
├── frontend/
│   └── emotion-chat/        # React 应用
│       ├── ChatPage.jsx     # 聊天页面组件
│       ├── App.js
│       └── package.json
```

---

## 🚀 快速启动（本地开发）

### 后端运行（FastAPI）

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

接口文档自动生成：  
📄 http://localhost:8000/docs

---

### 前端运行（React）

```bash
cd frontend/emotion-chat
npm install
npm start
```

前端地址：  
🌐 http://localhost:3000

---

然后访问：

- 前端：`http://localhost:3000`
- 后端：`http://localhost:8000`

---

## 📦 requirements.txt 示例

（已由 `pip freeze` 生成）

```
annotated-types==0.7.0
anyio==4.9.0
certifi==2025.1.31
```

---

## 📡 示例 API：POST /messages

**请求：**

```http
POST /messages
Content-Type: application/json

{
  "text": "我今天有点丧"
}
```

**响应：**

```json
{
  "data": {
    "message_id": "1234-uuid",
    "text": "我今天有点丧",
    "response": "我听到了你的情绪：我今天有点丧，愿你被温柔以待 🤍",
    "timestamp": "2025-04-03T18:24:00Z"
  }
}
```

---

## 🧪 TODO（可扩展功能）

- [ ] CI/CD，docker部署
- [ ] 用户登录注册系统（JWT 鉴权）
- [ ] 消息存入 MongoDB
- [ ] 接入 Hugging Face 模型实现情绪分析
- [ ] 添加 CI/CD + 自动部署到 AWS
