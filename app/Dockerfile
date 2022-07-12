FROM node:18.4.0-alpine

RUN apk add --no-cache tini \
    && mkdir -p /usr/src/app \
    && mkdir -p /usr/src/app/public \
    && mkdir -p /usr/src/app/server \
    && mkdir -p /usr/src/app/views

ENTRYPOINT ["/sbin/tini", "--", "node"]

EXPOSE 1337

WORKDIR /usr/src/app
COPY ./server/package.json ./
COPY ./server/package-lock.json ./
RUN npm i
COPY ./server/index.js ./server
COPY ./views ./views
COPY ./public/app.js ./public/app.js
COPY ./public/css ./public/css
COPY ./public/logo.png ./public/logo.png

CMD ["./server/index.js"]
