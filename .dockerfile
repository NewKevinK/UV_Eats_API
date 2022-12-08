FROM node:16

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . .

EXPOSE 5333

CMD ["node", "app.js"]