# Frontend
Frontend part contains basic infastructure for POC your ideas.

You can find there three builded pages
1. MainPage
2. PlaygroundPage
3. ChatPage

<b>MainPage</b> empty and it open for great description your solution.
<b>PlaygroundPage</b> provide ui with ModelSettings, SystemMessage and Chat. Builded for testing ideas with different settings and make it on the go just from the frontend.
<b>ChatPage</b> this layout as a starting point for presenting chat-based solutions.
<b>b/w theme</b> button in the lower left part of the screen.

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
├── Makefile
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Makefile Commands

These commands help automate common tasks related to building and maintaining the frontend application.

`make install`: Install npm dependencies required for the project.

`make dev`: Install dependencies and start the development server.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

`make build`: Install dependencies and build the project for production.

`make updates`: Check for updates to npm packages and updates them if necessary.

`make clean`: Clean up temporary files and directories, such as .next and node_modules.

## Deployment

1. Make sure your project don't have any issues after `make build`
2. Go to -> [vercel](https://vercel.com/login) -> log in with GitHub (then it show all your repositories ready for deploy)
3. Click -> <b>Add New...</b> -> <b>Project</b> -> Import Git Repository
4. Configure Project -> Root Directory -> CLick <b>Edit</b> -> Choose frontend folder (with Next logo) -> Continue
5. Click <b>Deploy</b>
6. If there no issues with project, you will see link for your project!
7. If there issues -> <b>Build Logs</b> -> Read them -> Debug!

## CI/CD

1. When you commit to main -> your project automatically deployed with fresh updates.
