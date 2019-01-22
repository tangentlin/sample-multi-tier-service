FROM node:10 as build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN yarn
COPY . /usr/src/app

FROM node:10
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
EXPOSE 3000
ENTRYPOINT [ "node", "index.js" ]