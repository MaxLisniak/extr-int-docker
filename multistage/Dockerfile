FROM node:lts-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY  . .
RUN npx tsc


FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY --from=builder ["/usr/src/app/dist", "./dist"]
EXPOSE 3000
RUN 'ls'
CMD ["npm", "start"]
