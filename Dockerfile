FROM node:21.6.2-alpine3.18

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
RUN yarn

#COPY . ./ running with volume instead ;)

CMD [ "yarn", "start" ]