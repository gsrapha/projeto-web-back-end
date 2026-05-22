# ONG Conecta Futuro

Sistema web desenvolvido para gerenciamento de projetos sociais de uma ONG fictícia, utilizando arquitetura Full Stack com React, Flask, MongoDB e Docker.

## 📌 Sobre o Projeto

O objetivo deste sistema é permitir o cadastro, visualização, edição e exclusão de projetos sociais de maneira simples e organizada.

A aplicação foi desenvolvida como atividade acadêmica da disciplina de Desenvolvimento Web Back-End.

---

# 🚀 Tecnologias Utilizadas

## Front-End
- React.js
- Axios
- CSS3

## Back-End
- Python
- Flask
- Flask-CORS

## Banco de Dados
- MongoDB

## Containerização
- Docker
- Docker Compose

---

# 📂 Estrutura do Projeto

~~~~bash

Project/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── public/
│   │   └── index.html
│   │
│   ├── package.json
│   └── Dockerfile
│
└── docker-compose.yml

~~~~

#⚙️ Funcionalidades

✅ Cadastro de projetos sociais
✅ Listagem de projetos
✅ Atualização de projetos
✅ Exclusão de projetos
✅ Integração Front-End e Back-End
✅ Persistência em banco MongoDB
✅ Execução via Docker Compose

#🐳 Como Executar o Projeto

Pré-requisitos
Docker Desktop
Git

Clonar o repositório
-git clone https://github.com/gsrapha/projeto-web-back-end.git
Entrar na pasta
-cd projeto-web-back-end
Executar o sistema
-docker compose up --build

#🌐 Acessos

Front-End
-http://localhost:3000

Back-End
-http://localhost:5000

MongoDB
-mongodb://localhost:27017

📸 Mockup

O mockup da aplicação foi desenvolvido para representar:

-Navbar SPA
-Cadastro de projetos
-Listagem de projetos
-Área de detalhes
-Funcionalidades CRUD

📖 Conceitos Aplicados
-SPA (Single Page Application)
-CRUD
-API REST
-Componentização React
-Integração Cliente/Servidor
-Containerização
-Persistência de dados

👨‍💻 Autor

-Raphael Souza Gonçalves

📄 Licença

Projeto desenvolvido apenas para fins acadêmicos.



