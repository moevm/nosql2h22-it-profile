FROM node:18

WORKDIR /usr/app

ENV NODE_ENV=development

COPY . .

RUN npm i

CMD npm run dev