FROM node:18-alpine

WORKDIR /index

COPY package*.json ./
RUN npm install

COPY . .

RUN npx tsc

EXPOSE 10101

CMD ["node", "dist/index.js"]