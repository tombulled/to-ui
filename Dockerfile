FROM node:16

WORKDIR /app

COPY package.json package.json
COPY src src
COPY public public

RUN npm install -g http-server
RUN npm install
RUN npm run build

ENTRYPOINT ["http-server", "build", "-p", "8080"]