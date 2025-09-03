Desafio Full Stack - Gestão de Leads
Este repositório contém a solução completa para o Desafio Full Stack, que consiste numa aplicação de página única (SPA) para a gestão de leads de uma empresa.

A aplicação permite visualizar leads "convidados", aceitá-los ou recusá-los, e ver uma lista separada de leads que foram aceites. A lógica de negócio inclui uma regra de desconto de 10% para leads com preço superior a $500.

Funcionalidades
Visualização de Leads: Interface com duas abas principais: "Invited" e "Accepted".

Ações de Gestão:

Aceitar Lead: Move um lead da lista de convidados para a de aceites. Aplica um desconto de 10% se o preço for superior a $500.

Recusar Lead: Remove um lead da lista de convidados.

Comunicação em Tempo Real: O frontend consome uma API RESTful para todas as operações, atualizando a interface de forma dinâmica.

Testes Unitários: A camada de testes garante que a lógica de negócio crítica (regra do desconto) funciona como esperado.

Tecnologias Utilizadas
O projeto foi construído seguindo as melhores práticas e utilizando tecnologias modernas:

Backend:

.NET Core (ASP.NET Core Web API)

Entity Framework Core (ORM)

Frontend:

React com Vite

Tailwind CSS para estilização

Base de Dados:

SQL Server

Testes:

xUnit

Pré-requisitos
Para executar este projeto, certifique-se de que tem os seguintes softwares instalados:

.NET SDK (versão 8.0 ou superior)

Node.js e npm (versão 18.x ou superior)

SQL Server (a versão Express é suficiente)

Como Executar o Projeto
Siga os passos abaixo para configurar e executar a aplicação localmente.

1. Clonar o Repositório
git clone [https://github.com/LuizzGIT/desafio-leads-dti.git](https://github.com/LuizzGIT/desafio-leads-dti.git)
cd desafio-leads-dti

2. Configurar e Executar o Backend
O backend precisa de criar a base de dados a partir das migrações do Entity Framework.

# Navegue para a pasta do projeto backend
cd Backend/Backend

# Restaure as dependências do .NET
dotnet restore

# Aplique as migrações para criar a base de dados "LeadsDB"
dotnet ef database update

# Inicie o servidor da API
dotnet run

O servidor backend estará agora a ser executado em http://localhost:5000.

3. Configurar e Executar o Frontend
Abra um novo terminal na raiz do projeto.

# Navegue para a pasta do projeto frontend
cd frontend

# Instale as dependências do Node.js
npm install

# Inicie o servidor de desenvolvimento do React
npm run dev

A aplicação frontend estará agora disponível no seu navegador em http://localhost:5173.

4. Executar os Testes Unitários
Para verificar a integridade da lógica de negócio do backend, pode executar os testes unitários.

# A partir da pasta raiz do projeto (ProjetoDTI)
dotnet test

Projeto desenvolvido por Luiz Henrique Magalhães como parte de um processo seletivo.
