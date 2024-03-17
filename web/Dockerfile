FROM node:20.11-alpine

WORKDIR /src

COPY . .
RUN npm install --ignore-scripts
RUN npm run build

CMD npm run start
