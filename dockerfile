FROM node:lts-alpine

#RUN npm install -g npm@8.1.3
#RUN npm install -g @vue/cli@4.5.15

WORKDIR /app

COPY package*.json .
RUN npm i
CMD [ "npm", "run", "dev", "--", "--host" ]