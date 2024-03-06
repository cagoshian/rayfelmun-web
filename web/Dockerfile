FROM node:20.11-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm run build

COPY . .

CMD npm run start

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
  CMD curl -f http://localhost:3000 || exit 1