FROM node:18-alpine

RUN apk add --no-cache libc6-compat

COPY index.js .
COPY package.json .

ENTRYPOINT [ "node", "index.js" ]
