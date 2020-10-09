FROM node:12

WORKDIR /usr/src/app
COPY package*.json ./
COPY pages/ pages
COPY tests/ tests
COPY nightwatch* ./
RUN npm install
RUN npm install -g nightwatch
RUN npm install nightwatch-video-recorder
RUN npm install selenium-webdriver
RUN npm install chromedriver
CMD ["./node_modules/.bin/nightwatch", "-e", "chrome", "tests"]