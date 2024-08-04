FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache git
RUN apk add curl

COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm install
COPY . .

EXPOSE 3001

ENTRYPOINT ["npm", "run", "dev"]