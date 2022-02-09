FROM node:16
WORKDIR /posts
COPY package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; then npm install; else npm install --only=production; fi
COPY ./posts ./
ENV PORT 4000
EXPOSE $PORT
CMD ["npm","start"]