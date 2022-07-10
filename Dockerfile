FROM node:16

WORKDIR /app

COPY package.json package.json
COPY src src
COPY public public

RUN npm install

ENTRYPOINT ["npm", "start"]