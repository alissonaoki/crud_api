FROM node:16.15.0

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD [ "npm", "run", "start" ]