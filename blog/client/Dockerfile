FROM node:16

WORKDIR /app 
COPY package.json ./
COPY package-lock.json ./
# ENV PORT=4001
# RUN npm install
COPY ./ ./

EXPOSE 3000
CMD ["npm","start"]