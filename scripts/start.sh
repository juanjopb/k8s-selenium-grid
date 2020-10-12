#!/usr/bin/env bash
source ././config.conf

#echo "Config for the username: $ibmcloud_username"
#echo "Config for the password: $ibmcloud_password" >&2
#echo "Config for the target host: $selenium_remote_host" >&2
#echo "Config for the target host port: $selenium_remote_port" >&2
if [ $selenium_remote_host == "localhost" ] || [ $selenium_remote_host == "127.0.0.1" ] || [ -z $selenium_remote_host ]; then
    selenium_remote_host="localhost"
    selenium_remote_port="4444"
    cd nightwatch && docker-compose up -d && sleep 30 && cd ..
fi

docker build -t nightwatch -f ./nightwatch/Dockerfile .
docker run -it --network="host" --env "SELENIUM_REMOTE_HOST=${selenium_remote_host}" --env "SELENIUM_REMOTE_PORT=${selenium_remote_port}" --env "IBMCLOUD_USER=${ibmcloud_username}" --env "IBMCLOUD_PASSWORD=${ibmcloud_password}" --env "IBMCLOUD_BUCKET=${ibmcloud_cos_bucket}" nightwatch
sleep 30
cd nightwatch && docker-compose kill && docker-compose rm -vf && cd ..

