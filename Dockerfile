FROM node:alpine

WORKDIR /app/

ADD package.json yarn.lock /app/

ADD ./ /app/

ENV PATH /app/node_modules/.bin:$PATH

ENV HOST 0.0.0.0
EXPOSE 3000

RUN yarn

CMD ["yarn", "start"]
