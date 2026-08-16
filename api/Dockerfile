FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci

COPY . .

EXPOSE 3333

CMD ["npx", "tsx", "src/server.ts"]
