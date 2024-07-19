# Projeto de Gerenciamento de Pessoas

Este projeto é uma aplicação para gerenciamento de pessoas, desenvolvido utilizando backend em Spring Boot e frontend em React. A aplicação permite listar, criar, editar e excluir pessoas, com funcionalidades de paginação e filtragem.

## Estrutura do Projeto

- **Backend:** Spring Boot
- **Frontend:** ReactJS utilizando Vite como bundler
- **Banco de Dados:** PostgreSQL
- **Containerização:** Docker e Docker Compose

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- Docker
- Docker Compose

## Configuração do Projeto

### 1. Clonar o Repositório

Clone este repositório para sua máquina local usando o seguinte comando:

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```

### 2. Configuração do Docker Compose

O arquivo docker-compose.yaml está configurado para orquestrar os contêineres necessários para a aplicação. A configuração inclui:

- Um contêiner para o PostgreSQL
- Um contêiner para o backend em Spring Boot
- Um contêiner para o frontend em React

### 3. Estrutura dos Diretórios
- person-management-backend: Diretório contendo o código-fonte do backend
    - Dockerfile: Arquivo Docker para construir a imagem do backend
- person-management-frontend: Diretório contendo o código-fonte do frontend
    - Dockerfile: Arquivo Docker para construir a imagem do frontend

### 4. Configuração do Banco de Dados
O serviço PostgreSQL é configurado no docker-compose.yaml com as seguintes variáveis de ambiente:

- POSTGRES_USER: radar_saude
- POSTGRES_PASSWORD: saude_radar
- POSTGRES_DB: radar_saude

### 5. Construir e rodar a aplicação

Para construir e rodar a aplicação, execute o seguinte comando na raiz do projeto:

```bash
docker-compose up --build
```

### 6. Acessar a Aplicação
Depois que todos os serviços estiverem em execução, você pode acessar a aplicação:

Frontend: http://localhost:3000
Backend: http://localhost:8080

### Desenvolvimento
## Backend
O backend é um projeto Spring Boot. O Dockerfile do backend está configurado para:

1. Usar uma imagem Maven para construir o projeto.
2. Usar uma imagem OpenJDK para rodar a aplicação.

## Frontend
O frontend é um projeto React. O Dockerfile do frontend está configurado para:

1. Usar uma imagem Node para construir a aplicação.
2. Usar uma imagem Nginx para servir a aplicação.

## Solução de Problemas
Se encontrar problemas ao rodar a aplicação, você pode verificar os logs dos contêineres usando:

```bash
docker-compose logs
```