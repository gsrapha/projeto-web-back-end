# ONG Conecta Futuro

Sistema Web Full Stack desenvolvido como projeto acadêmico da disciplina de **Desenvolvimento Web Back-End**, utilizando **React**, **Flask**, **MongoDB** e **Docker**.

> **⚠️ Aviso**
>
> Este projeto foi desenvolvido exclusivamente para fins acadêmicos, simulando uma aplicação real para gerenciamento de projetos sociais. O objetivo é demonstrar conhecimentos em desenvolvimento Full Stack, APIs REST, banco de dados NoSQL e containerização com Docker.

---

## 📖 Sobre o Projeto

A **ONG Conecta Futuro** é uma aplicação web que simula o gerenciamento de projetos sociais de uma organização não governamental.

A plataforma permite cadastrar, visualizar, editar e excluir projetos sociais de forma simples e intuitiva, utilizando uma arquitetura moderna baseada em SPA (Single Page Application).

---

## 🚀 Tecnologias Utilizadas

### Front-end

* React.js
* Axios
* CSS3

### Back-end

* Python
* Flask
* Flask-CORS

### Banco de Dados

* MongoDB

### Containerização

* Docker
* Docker Compose

---

## ✨ Funcionalidades

* ✅ Cadastro de projetos sociais
* ✅ Listagem de projetos
* ✅ Visualização detalhada em modal
* ✅ Edição de projetos em modal
* ✅ Exclusão de projetos
* ✅ Filtro por categoria
* ✅ Integração Front-end + Back-end através de API REST
* ✅ Persistência de dados utilizando MongoDB

---

## 🏗️ Arquitetura

```text
Project
│
├── backend
│   ├── Flask
│   ├── API REST
│   └── MongoDB
│
├── frontend
│   ├── React
│   ├── Axios
│   └── CSS
│
└── Docker Compose
```

---

## 📂 Estrutura do Projeto

```text
Project/
│
├── backend/
│   ├── app.py
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
└── docker-compose.yml
```

---

## ▶️ Como Executar

### Clonar o repositório

```bash
git clone https://github.com/gsrapha/projeto-web-back-end.git
```

### Entrar na pasta

```bash
cd Project
```

### Construir os containers

```bash
docker compose build
```

### Executar a aplicação

```bash
docker compose up
```

---

## 🌐 Endpoints

### Front-end

```
http://localhost:3000
```

### API

```
GET     /projects
POST    /projects
PUT     /projects/:id
DELETE  /projects/:id
```

---

## 📸 Funcionalidades Demonstradas

* Cadastro de projetos sociais
* Listagem dinâmica
* Modal de detalhes
* Modal de edição
* Filtro por categoria
* Integração React + Flask + MongoDB

---

## 🎓 Contexto Acadêmico

Projeto desenvolvido para a disciplina de **Desenvolvimento Web Back-End** do curso de **Análise e Desenvolvimento de Sistemas**, simulando um ambiente de desenvolvimento profissional utilizando arquitetura Full Stack.

---

## 👨‍💻 Autor

**Raphael Souza Gonçalves**

* GitHub: https://github.com/gsrapha

---

## 📄 Licença

Este projeto possui finalidade exclusivamente **educacional e acadêmica**, sendo disponibilizado apenas para demonstração de conhecimentos técnicos e composição de portfólio.
