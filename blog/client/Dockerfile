FROM node:alphine

WORKDIR /app 
COPY package.json ./
ENV PORT=4001
RUN npm install
COPY ./ ./

CMD ["npm","start"]