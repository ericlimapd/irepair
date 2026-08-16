# iRepair

Sistema de gestão de ordens de serviço, organizado como monorepo full-stack.

## Estrutura

```
irepair/
  client/   front-end React + TypeScript + Vite
  api/      back-end Express + Prisma + MySQL com autenticação JWT
```

## Pré-requisitos

- Node.js
- MySQL rodando localmente (o banco `irepair_db` é criado automaticamente pela
  primeira migration do Prisma — não precisa criá-lo manualmente)

## Como rodar

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
negócio (`/clients`, `/service-orders`) exigem esse cookie — sem ele, a API
responde `401`.

Para criar o primeiro usuário, use `POST /auth/register` (por exemplo, via
Postman ou curl) com um corpo `{ "email": "...", "password": "..." }`, já que
o front ainda não tem tela de cadastro.
