FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /dist

EXPOSE 80
CMD [ "http-server", "dist" ]