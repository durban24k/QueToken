FROM node:latest
WORKDIR /quetoken
COPY package.json /quetoken
# RUN 
COPY . /quetoken
# CMD