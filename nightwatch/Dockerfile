#docker build -t nightwatch -f ./nightwatch/Dockerfile .
#docker run -it nightwatch
FROM node:12
WORKDIR /usr/src/app
COPY nightwatch/package*.json ./
RUN npm install && npm install -g nightwatch 
RUN npm install --save-dev nightwatch-video-recorder nightwatch-record selenium-webdriver chromedriver
RUN curl -fsSL https://clis.cloud.ibm.com/install/linux | sh
COPY scripts/execute_test.sh ./
RUN chmod +x execute_test.sh
COPY nightwatch/tests/ tests
COPY nightwatch/nightwatch* ./
CMD ["./execute_test.sh"]
