# Backend
Backend part contains basic infastructure for POC your ideas.

You can find there two main features
1. Process from frontend to backend text to text content
2. Process from frontend to backend image to text content


# Tools used
- [FastAPI](https://fastapi.tiangolo.com/):        Modern, fast (high-performance) Python web framework
- [Anthropic](https://docs.anthropic.com/en/home): AI integration for advanced natural language processing


## Structure
```
backend/
├── app/
│   ├── api/
│   │   └── chat.py
│   ├── core/
│   │   ├── config.py 
│   │   └── logging.py
│   ├── models/
│   │   └── request_models.py
│   ├── services/
│   │   └── anthropic_service.py
│   ├── utils/
│   │   └── prompt.py
│   └── main.py
├── .env.example
├── docker-compose.yml
├── Dockerfile
├── README.md
├── Requirements.txt
└── setup.sh
```

## Getting Started

Run the development server:

```bash
fastapi dev ./app/main.py
```

Serving at: [http://localhost:8000](http://localhost:8000)

API docs: [http://localhost:8000/docs](http://localhost:8000/docs)

```
docker run -d -p 8000:8000 -e ANTHROPIC_API_KEY=YOUR_API_KEY ContainerID
```