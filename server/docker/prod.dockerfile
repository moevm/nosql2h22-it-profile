FROM node:16

WORKDIR /usr/src/app

COPY . .

ENV NODE_ENV=production

RUN npm i

CMD npm run serve