FROM node:18.13.0

WORKDIR /graphql_example

COPY ./package.json /package.json

RUN yarn install

COPY . .
