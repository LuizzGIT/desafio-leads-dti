# Desafio Full Stack - Gestão de Leads

Este repositório contém a solução completa para o **Desafio Full Stack**, que consiste numa aplicação **SPA (Single Page Application)** para a **gestão de leads** de uma empresa.

A aplicação permite visualizar leads "convidados", aceitá-los ou recusá-los, e acompanhar uma lista separada de leads aceitos.  
Além disso, existe uma **regra de negócio**: leads com preço superior a **$500** recebem um **desconto de 10%** automaticamente.

---

## 🚀 Funcionalidades

- **Visualização de Leads**
  - Interface com duas abas: **Invited** e **Accepted**.

- **Gestão de Leads**
  - ✅ Aceitar Lead → move da aba *Invited* para *Accepted* (com desconto de 10% se > $500).  
  - ❌ Recusar Lead → remove da lista de convidados.

- **Comunicação em Tempo Real**
  - O frontend consome uma API RESTful, atualizando a interface de forma dinâmica.

- **Testes Unitários**
  - Garantem que a lógica de negócio (como o desconto) funciona corretamente.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- [.NET 8 (ASP.NET Core Web API)](https://learn.microsoft.com/aspnet/core)  
- [Entity Framework Core](https://learn.microsoft.com/ef/core)

### Frontend
- [React](https://react.dev/) (com [Vite](https://vitejs.dev/))  
- [Tailwind CSS](https://tailwindcss.com/)

### Base de Dados
- [SQL Server](https://www.microsoft.com/sql-server) (Express é suficiente)

### Testes
- [xUnit](https://xunit.net/)

---

## 📦 Pré-requisitos

Antes de rodar o projeto, garanta que você tem instalado:

- [.NET SDK 8.0+](https://dotnet.microsoft.com/download)
- [Node.js 18+](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/sql-server)

---

## ⚙️ Como Executar o Projeto

### 1. Clonar o Repositório
```bash
git clone https://github.com/LuizzGIT/desafio-leads-dti.git
cd desafio-leads-dti
```
### 2. Configurar e Executar o Backend

O backend cria a base de dados a partir das migrações do Entity Framework.
```bash
# Acesse a pasta do backend
cd Backend/Backend

# Restaure dependências
dotnet restore

# Aplique as migrações (cria a base "LeadsDB")
dotnet ef database update

# Inicie a API
dotnet run
```

➡️ O backend estará rodando em: http://localhost:5000

### 3. Configurar e Executar o Frontend

Abra outro terminal, na raiz do projeto:

```bash
# Acesse a pasta do frontend
cd frontend

# Instale dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```
➡️ O frontend estará disponível em: http://localhost:5173

### 4. Executar os Testes Unitários

Na raiz do projeto:
```bash
dotnet test
```
## 👨‍💻 Autor

Projeto desenvolvido por Luiz Henrique Magalhães   

   📌 Como parte de um processo seletivo.
