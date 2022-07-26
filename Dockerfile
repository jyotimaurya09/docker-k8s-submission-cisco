FROM node:latest
# working directory
WORKDIR /app
# install packages for app
ADD package*.json ./
RUN npm install
ADD . .
EXPOSE 3000
CMD node index.js