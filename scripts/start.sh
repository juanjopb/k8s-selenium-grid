#!/usr/bin/env bash
source ././config.conf

echo "Checking Selenium parameters"
if [ $selenium_remote_host == "localhost" ] || [ $selenium_remote_host == "127.0.0.1" ] || [ -z $selenium_remote_host ]; then
    selenium_remote_host="localhost"
    selenium_remote_port="4444"
    echo "Starting Locally Selenium with Docker-compose"
    cd nightwatch && docker-compose up -d && sleep 30 && cd ..
fi
echo "Start to Build nightwatch test Dockerfile"
docker build -t nightwatch -f ./nightwatch/Dockerfile .
echo "Running nightwatch Dockerfile"
docker run -it --network="host" --env "SELENIUM_REMOTE_HOST=${selenium_remote_host}" --env "SELENIUM_REMOTE_PORT=${selenium_remote_port}" --env "IBMCLOUD_USER=${ibmcloud_username}" --env "IBMCLOUD_APIKEY=${ibmcloud_apikey}" --env "IBMCLOUD_BUCKET=${ibmcloud_cos_bucket}" nightwatch
sleep 30
echo "Stop Selenium local servers"
cd nightwatch && docker-compose kill && docker-compose rm -vf && cd ..

