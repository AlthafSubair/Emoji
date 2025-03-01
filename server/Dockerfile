FROM node:20.15.1-bookworm-slim as development

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]

FROM node:20.15.1-bookworm-slim as production

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

CMD ["node", "index.js"]