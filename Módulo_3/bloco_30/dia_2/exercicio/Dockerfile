FROM node:16.14.2-alpine3.14

WORKDIR /back

COPY package*.json ./

EXPOSE 3001

RUN npm install

COPY . .

CMD [ "npm", "start" ]