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

# Development on a Cloud Server

For remote development, you will need:

- Server Access (ssh user@ip & password || SSH key)
- Visual Studio Code

Pre-installed software on the server:

- vim
- build-essential
- python3
- python3-venv
- docker-ce
- docker-ce-cli
- docker-buildx-plugin
- docker-compose-plugin

---

# Running Docker Container

To deploy a container to a cloud server, you will need:

- Downloaded [Docker](https://www.docker.com/products/docker-desktop/) program
- Account on [DockerHub](https://hub.docker.com/)
- [Create a repository](https://docs.docker.com/docker-hub/repos/create/)
- Anthropic API token
- Linux or MacOS operating system

0. In the `Makefile`, add **USERNAME** and **REPO** to the existing tokens:
```
USERNAME=UserNameDockerHub
REPO=RepositoryNameDockerHub
```
1. Make sure your ANTHROPIC_API_KEY in .env
2. Build the image for Linux
```bash
make build_docker
```
3. Run the container with the application
```bash
make run_docker
```
4. Also, you can publish the image on DockerHub
```bash
make push_docker
```

---

## Downloading and Running the Published Image
0. Log into the server
```bash
ssh -i PATH_TO_YOUR_KEY.pem ubuntu@SERVER_IP_ADDRESS
```
1. Find the published image on DockerHub:
```bash
docker search username/projectname
```
2. Download the image:
```bash
docker pull username/projectname:v1
```
3. Run the container with Backend and ANTHROPIC API tokens:
```bash
sudo docker run -d -p 8000:8000 -e ANTHROPIC_API_KEY=YOUR_API_KEY ContainerID
```

# DONE
--- --- --- 
