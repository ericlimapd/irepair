# iRepair

Sistema de gestão de ordens de serviço, organizado como monorepo full-stack.

## Estrutura

```
irepair/
  client/   front-end React + TypeScript + Vite
  api/      back-end Express + Prisma + MySQL com autenticação JWT
```

## Como rodar com Docker (recomendado)

A forma mais simples de subir o projeto inteiro (banco, API e front) é com
o Docker Compose.

**Pré-requisitos:** Docker Desktop instalado e rodando. Conferir se tem um
MySQL local ocupando a porta `3306`, pare o serviço antes de subir o compose, 
ou o `db` não vai conseguir subir.

```bash
cp .env.example .env   # preencha as variáveis
docker compose up --build
```

- Front: `http://localhost:8080`
- API: `http://localhost:3333`
- MySQL: porta `3306`

As migrations do Prisma rodam automaticamente ao subir o container da API e
não é preciso rodar nada manualmente. Para derrubar tudo mantendo os dados,
use `docker compose down`. Para apagar os dados junto, use `docker compose down -v`.

## Como rodar em modo de desenvolvimento (sem Docker)

Apesar de ser útil usar Docker, rodar cada projeto direto com `npm run
dev` tende a ser mais rápido, pois o Docker Compose é voltado para 
empacotar e entregar o projeto funcionando em qualquer máquina, não para 
substituir esse fluxo.

**Pré-requisitos:** Node.js e MySQL rodando localmente (o banco `irepair_db`
é criado automaticamente pela primeira migration do Prisma, não precisa
criá-lo manualmente).

São dois projetos independentes, cada um com seu próprio `.env` (copie de
`.env.example`) e suas dependências (`npm install` dentro de cada pasta). É
preciso ter os dois rodando ao mesmo tempo, em terminais separados.

### Back-end

```bash
cd api
npm install
npx prisma migrate dev
npm run dev
```

### Front-end

```bash
cd client
npm install
npm run dev
```

## Autenticação

O login é feito via `POST /auth/login`, que devolve um token JWT num cookie
`httpOnly`. O navegador envia esse cookie automaticamente nas próximas
requisições, então o front nunca lida com o token diretamente. Rotas de
negócio (`/clients`, `/service-orders`) exigem esse cookie, sem ele a API
responde `401`.

Para criar o primeiro usuário, use `POST /auth/register` (por exemplo, via
Postman) com um corpo `{ "email": "...", "password": "..." }`, já que
o front ainda não tem tela de cadastro.
