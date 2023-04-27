FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /frontend

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["node", "server.js"]