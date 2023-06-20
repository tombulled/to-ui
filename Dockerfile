FROM node:16

WORKDIR /app

COPY package.json package.json
COPY src src
COPY public public

RUN npm install serve --location=global
RUN npm install
RUN npm run build

ENTRYPOINT ["serve", "-s", "build", "-p", "8080"]
