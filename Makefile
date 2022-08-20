.PHONY: install start stop logs test lighthouse greenframe

help: # Display available commands
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

init: install ## Init project
	npm run prepare

install: ## Install JavaScript deps
	npm install
	
start: ## Start dev environment en daemon mode
	npm run dev

build: ## Build production application
	npm run build

server: ## Start server on propuction build
	npm run start

# =====================
# TESTS ===============
# =====================

test-unit: ## Start unit tests
	npm run test:ci

test-unit-watch: ## Start unit tests in watch
	npm run test

test-e2e: build ## Start cypress tests
	npm run e2e:headless

test-e2e-watch: build ## Start cypress tests with GUI
	npm run e2e

test: test-unit test-e2e ## Start all tests
	@echo "End of tests"

# =====================
# STORY BOOK ==========
# =====================

storybook: ## Start storybook
	npm run storybook

# =============================================
# AUDIT (LIGHTHOUSE && GREENFRAME) ============
# =============================================

audit-start-server: build ## Run production server in container for audit
	docker-compose -p caencamp-audit up -d

audit-stop-server: ## Stop production server in container
	docker-compose -p caencamp-audit down

lighthouse: ## Start lighthouse audit (needs to have a started audit-server in another tab)
	LHCI_AUDIT_LOCAL=true lhci autorun

greenframe: ## Start greenframe audit (needs to have a started audit-server in another tab)
	greenframe analyze

deploy: ## Deploy static site
	rsync -avz --delete out/ vm-freebox:/var/www/caencamp-static/
