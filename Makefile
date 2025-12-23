.PHONY: help install clean clean-all clean-globo dev run build test audit lint format start stop watch

.DEFAULT_GOAL := help

help:
	@echo "╔═══════════════════════════════════════════════════════════╗"
	@echo "║           REACTHING - Makefile Disponível               ║"
	@echo "╠═══════════════════════════════════════════════════════════╣"
	@echo "║ INSTALAÇÃO E LIMPEZA:                                    ║"
	@echo "║  make install      - Instala dependências                ║"
	@echo "║  make clean        - Remove node_modules                 ║"
	@echo "║  make clean-all    - Remove tudo (node_modules + cache) ║"
	@echo "║  make clean-globo  - Remove referências globo + instala  ║"
	@echo "║                                                          ║"
	@echo "║ DESENVOLVIMENTO:                                         ║"
	@echo "║  make dev          - Inicia modo desenvolvimento         ║"
	@echo "║  make start        - Alias para 'dev'                   ║"
	@echo "║  make run          - Alias para 'dev'                   ║"
	@echo "║  make build        - Compila para produção              ║"
	@echo "║  make watch        - Watch com detalhes                 ║"
	@echo "║                                                          ║"
	@echo "║ QUALIDADE DE CÓDIGO:                                     ║"
	@echo "║  make test         - Executa testes                      ║"
	@echo "║  make lint         - Verifica erros (eslint)            ║"
	@echo "║  make format       - Formata código                      ║"
	@echo "║  make audit        - Verifica vulnerabilidades           ║"
	@echo "║                                                          ║"
	@echo "║ UTILITÁRIOS:                                             ║"
	@echo "║  make help         - Mostra esta mensagem                ║"
	@echo "║  make version      - Mostra versões instaladas           ║"
	@echo "║  make info         - Informações do projeto              ║"
	@echo "╚═══════════════════════════════════════════════════════════╝"

# ─────────────────────────────────────────────────────────────────
# INSTALAÇÃO E LIMPEZA
# ─────────────────────────────────────────────────────────────────

install:
	@echo "📦 Instalando dependências..."
	npm install
	@echo "✅ Dependências instaladas com sucesso!"

clean:
	@echo "🧹 Removendo node_modules..."
	rm -rf node_modules
	@echo "✅ node_modules removido!"

clean-all: clean
	@echo "🗑️  Removendo caches..."
	rm -f package-lock.json
	rm -rf build/
	npm cache clean --force
	@echo "✅ Tudo limpo!"

clean-globo:
	@echo "🌐 Removendo registries Globo e usando npm.js padrão..."
	rm -f package-lock.json
	rm -rf node_modules
	@echo "📦 Reinstalando dependências do NPM público..."
	npm install --registry=https://registry.npmjs.org/
	@echo "✅ Configurado com NPM público! O arquivo .npmrc local garante que future instalações usem o registro padrão."

# ─────────────────────────────────────────────────────────────────
# DESENVOLVIMENTO
# ─────────────────────────────────────────────────────────────────

dev:
	@echo "🚀 Iniciando modo desenvolvimento..."
	npm start

start: dev

run: dev

build:
	@echo "🔨 Compilando para produção..."
	npm run build
	@echo "✅ Build concluído! Verifique a pasta 'build/'"

watch:
	@echo "👀 Iniciando watch..."
	npm start

# ─────────────────────────────────────────────────────────────────
# QUALIDADE DE CÓDIGO
# ─────────────────────────────────────────────────────────────────

test:
	@echo "🧪 Executando testes..."
	npm test -- --watchAll=false

lint:
	@echo "🔍 Verificando código com eslint..."
	npx eslint src/ || true
	@echo "ℹ️  Use 'make format' para corrigir automaticamente"

format:
	@echo "✨ Formatando código com Biome..."
	npx biome format --write src/ || true
	@echo "✅ Código formatado com sucesso!"

audit:
	@echo "🔐 Verificando vulnerabilidades..."
	npm audit

# ─────────────────────────────────────────────────────────────────
# UTILITÁRIOS
# ─────────────────────────────────────────────────────────────────

version:
	@echo "📋 Versões instaladas:"
	@echo "Node: $$(node --version)"
	@echo "npm: $$(npm --version)"
	@echo "React: $$(npm list react | grep react | head -1)"
	@echo "TypeScript: $$(npm list typescript | grep typescript | head -1)"

info:
	@echo "📦 Informações do Projeto:"
	@cat package.json | grep -E '"name"|"version"|"description"' | head -3
