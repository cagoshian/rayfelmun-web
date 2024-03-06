FROM node:20.11-alpine

WORKDIR /t1

COPY . .
RUN npm install
RUN npm run build

CMD npm run start

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s \
  CMD curl -f http://localhost:3000 || exit 1