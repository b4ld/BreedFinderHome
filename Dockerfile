FROM node:8

COPY . /app

WORKDIR /app

RUN npm install --production

EXPOSE 3050

CMD ["npm","start"]
