# Frontend
Frontend part contains basic infastructure for POC your ideas.

You can find there three builded pages
1. MainPage
2. PlaygroundPage
3. ChatPage

MainPage empty and it open for great description your solution.
PlaygroundPage provide ui with ModelSettings, SystemMessage and Chat. Builded for testing ideas with different settings and make it on the go just from the frontend.
ChatPage this layout as a starting point for presenting chat-based solutions.


# Tools used
- [Next.js](https://nextjs.org/docs):                           React framework for production-ready applications
- [Tailwind CSS](https://tailwindcss.com/docs/installation):    Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/docs):                      Beautifully designed components built with Radix UI and Tailwind CSS
- [Vercel AI SDK](https://sdk.vercel.ai/docs/introduction):     AI-powered features integration (chat)


## Structure
```
root/
├── src/
│   ├── app/
│   ├── shared/
│   └── widgets/
├── .env.example
├── components.json
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

