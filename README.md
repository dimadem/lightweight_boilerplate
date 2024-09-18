# lightweight_boilerplate
Represents initial solution with minimal functionality like process text and images.
It's a starting point includes basic structure and essential components.

### Features
- Playground page
- Chat page
- Processing text to text
- Processing image to text

### Tech Stack

<b>Frontend</b>
-> [read more](frontend/README.md)

- [Next.js](https://nextjs.org/docs):                           React framework for production-ready applications
- [Tailwind CSS](https://tailwindcss.com/docs/installation):    Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/docs):                      Beautifully designed components built with Radix UI and Tailwind CSS
- [Vercel AI SDK](https://sdk.vercel.ai/docs/introduction):     AI-powered features integration

<b>Backend</b>
-> [read more](backend/README.md)

- [FastAPI](https://fastapi.tiangolo.com/):         Modern, fast (high-performance) Python web framework
- [Anthropic](https://docs.anthropic.com/en/home):       AI integration for advanced natural language processing

# Creating a Repository
1. Click the USE THIS TEMPLATE button in the top right
2. Name your project
3. The content in the repository will be used for the hackathon

# Structure
```
root/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat.py
│   │   ├── core/
│   │   │   ├── config.py 
│   │   │   └── logging.py
│   │   ├── models/
│   │   │   └── request_models.py
│   │   ├── services/
│   │   │   └── anthropic_service.py
│   │   ├── utils/
│   │   │   └── prompt.py
│   │   └── main.py
│   ├── .env.example
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── README.md
│   ├── Requirements.txt
│   └── setup.sh
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── shared/
│   │   └── widgets/
│   ├── .env.example
│   ├── components.json
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── README.md
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── LICENSE
└── README.md
```
