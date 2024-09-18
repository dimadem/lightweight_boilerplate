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
1. Click the <b>USE THIS TEMPLATE</b> button in the top right
2. Name your project
3. The content in the repository will be used for the hackathon

# LOCAL usage

For local project installation, you will need:
- [Anthropic API token](https://console.anthropic.com/dashboard)

### Your computer
- [Python](https://www.python.org/)
- [Node.js](https://nodejs.org/en)
- Linux or MacOS operating system

### Codespaces
- At GitHub repository -> Code -> Create codespace on main

## 1. Installation
1. Clone the repository
```
git clone github.com/yourreponame
```
3. Frontend folder
```
make install
```
3. Backend folder
```
make setup
```
3.1 Paste API KEY to .env file
```
ANTHROPIC_API_KEY=YOUR_API_KEY
```
## 2. Run the full-stack boilerplate
1. frontend
```
cd ./frontend/
make dev
```
2. backend
```
cd ./backend/
make dev
```

## DONE

For deployment -> take a look at Frontend [README.md](frontend/README.md) & Backend [README.md](backend/README.md)

---

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
