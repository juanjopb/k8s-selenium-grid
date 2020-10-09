#docker build -t nightwatch -f ./nightwatch/Dockerfile .
#docker run -it nightwatch
FROM node:12

WORKDIR /usr/src/app
COPY nightwatch/package*.json ./
COPY nightwatch/tests/ tests
COPY nightwatch/nightwatch* ./
RUN npm install
RUN npm install -g nightwatch
RUN npm install nightwatch-video-recorder
RUN npm install nightwatch-record
RUN npm install selenium-webdriver
RUN npm install chromedriver
CMD ["./node_modules/.bin/nightwatch"]