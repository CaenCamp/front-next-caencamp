.PHONY: install start stop logs test

help: # Display available commands
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install php deps
	npm install

start: ## Start dev environment en daemon mode
	npm run dev

build: ## Build production application
	npm run build

# ====================
# test ===============
# ====================

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
