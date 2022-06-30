FROM node:18.4.0-alpine

COPY package.json ./
COPY package-lock.json ./

RUN apk add --no-cache tini && mkdir -p /usr/src/app

ENTRYPOINT ["/sbin/tini", "--", "node"]

EXPOSE 1337

WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY index.js ./
COPY home.html ./

CMD ["."]
