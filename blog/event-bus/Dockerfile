<<<<<<< HEAD
FROM node:16
WORKDIR /app 
COPY ./package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; then npm install; else npm install --only=production; fi
COPY . ./
ARG PORT
EXPOSE $PORT
=======
FROM node:alpine

WORKDIR /app 
COPY package.json ./
RUN npm install
COPY ./ ./

>>>>>>> with_kubernetes
CMD ["npm","start"]