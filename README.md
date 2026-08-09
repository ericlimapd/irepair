# iRepair

Sistema de gestão de ordens de serviço, organizado como monorepo full-stack.

## Estrutura

```
irepair/
  client/   front-end React + TypeScript + Vite
  api/      back-end Express + Prisma + MySQL com autenticação JWT
```

## Como rodar

São dois projetos independentes. Cada um tem seu próprio `.env` (copie de
`.env.example`) e suas dependências (`npm install` dentro de cada pasta).

### Front-end

```bash
cd client
npm install
npm run dev
```

### Back-end

```bash
cd api
npm install
npm run dev
```
