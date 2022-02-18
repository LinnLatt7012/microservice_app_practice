FROM node:latest

WORKDIR /app 
COPY package*.json ./

RUN npm install -g npm@8.5.1

RUN npm install 
COPY . .

CMD ["npm","start"]