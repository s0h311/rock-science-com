FROM node:24.4-alpine3.22

WORKDIR /app

RUN corepack enable

COPY package*.json .

RUN yes | pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]