FROM node:latest


WORKDIR /app

COPY package*.json ./

RUN yarn install

RUN yarn global add serve

COPY . .

RUN yarn build

EXPOSE 80

CMD [ "serve", "-s", "build", "-l", "80"  ]