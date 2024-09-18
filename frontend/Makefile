# Colors for output
RED = \033[0;31m
GREEN = \033[0;32m
GRAY = \033[0;30m
NC = \033[0m

# Setup .env file
env:
	@echo "$(GRAY)Setting up .env file$(NC)"
	cp .env.example .env.local
	@echo "$(GREEN)✅ .env file setup complete$(NC)"

# Install npm dependencies
install: env
	@echo "$(GRAY)Installing npm packages$(NC)"
	npm install
	@echo "$(GREEN)✅ npm packages installed$(NC)"

# Start development server
dev: install
	@echo "$(GRAY)Starting development server$(NC)"
	npm run dev
	@echo "$(GREEN)✅ Development server started$(NC)"

# Build the project
build: install
	@echo "$(GRAY)Building the project$(NC)"
	npm run build
	@echo "$(GREEN)✅ Project build complete$(NC)"


## Utility Commands

updates:
	@echo "$(GRAY)Checking for updates$(NC)"
	npx npm-check-updates -u
	@echo "$(GREEN)✅ Update check complete$(NC)"

# Clean temporary files and directories
clean:
	@echo "$(GRAY)Cleaning temporary files and directories$(NC)"
	rm -rf .next node_modules
	@echo "$(GREEN)✅ Clean complete$(NC)"

# Main targets
.PHONY: env install dev build updates clean