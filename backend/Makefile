USERNAME = DOCKERHUB_USERNAME
REPO = DOCKERHUB_REPO

# Colors for output
RED = \033[0;31m
GREEN = \033[0;32m
GRAY = \033[0;30m
NC = \033[0m

## Setup and Configuration Commands

# Check if Python is installed
check_python:
	@echo "$(GRAY)Checking if Python is installed$(NC)"
	@command -v python3 >/dev/null 2>&1 || (echo "$(RED)❗️ Python is not installed$(NC)" && exit 1)
	@echo "$(GREEN)✅ Python is installed$(NC)"

# Setup .env file
setup_env: .env

.env:
	@echo "$(GRAY)Setting up .env$(NC)"
	@if [ -f ".env" ]; then \
        echo "$(RED)❗️ .env already exists$(NC)"; \
	else \
        cp .env.example .env && echo "$(GREEN)✅ .env created$(NC)"; \
	fi

# Create virtual environment
create_venv: update_upgrade_ubuntu .venv

update_upgrade_ubuntu:
	@echo "$(GRAY)update && upgrade Ubuntu$(NC)"
	sudo apt update && sudo apt upgrade
	@echo "$(GRAY)Install python3-pip package$(NC)"
	sudo apt install python3-pip
	@echo "$(GRAY)Install .venv package$(NC)"
	sudo apt install -y python3-venv

.venv:
	@echo "$(GRAY)Creating virtual environment .venv$(NC)"
	python3 -m venv .venv 
	@echo "$(GREEN)✅ .venv created$(NC)"

# Install dependencies
install_deps: .venv
	@echo "$(GRAY)Installing required packages$(NC)"
	. .venv/bin/activate && pip install -r requirements.txt 
	@echo "$(GREEN)✅ Packages installed from requirements.txt$(NC)"

# Complete project setup
setup: check_python setup_env create_venv install_deps
	@echo "$(GRAY)\n--- --- --- --- ---\n$(NC)"
	@echo "$(GREEN)✅ Setup complete\n$(NC)"

dev:
	@echo "$(GRAY)Starting development server$(NC)"
	. .venv/bin/activate && fastapi dev ./app/main.py
	@echo "$(GREEN)✅ Development server started$(NC)"

## Docker Commands

# Build Docker container
build_docker:
	@echo "$(GRAY)Building Docker container$(NC)"
	sudo docker build --platform linux/amd64 -t $(USERNAME)/$(REPO):latest .
	@echo "$(GREEN)✅ Docker container builded$(NC)"

# Run Docker container locally
run_docker:
	@echo "$(GRAY)Running Docker container locally$(NC)"
	sudo docker run --rm -it --env-file .env $(USERNAME)/$(REPO):latest
	
# Push Docker container to DockerHub
push_docker:
	@echo "$(GRAY)Pushing Docker container to DockerHub$(NC)"
	docker push $(USERNAME)/$(REPO):latest
	@echo "$(GREEN)✅ Docker container pushed to DockerHub$(NC)"

## Utility Commands

# Clean temporary files and directories
clean:
	@echo "$(GRAY)Cleaning temporary files and directories$(NC)"
	rm -rf .venv .env
	@echo "$(GREEN)✅ Clean complete$(NC)"


# Main targets
.PHONY: all check_python setup_env create_venv install_dep update_upgrade_ubuntu build_docker run_docker clean
