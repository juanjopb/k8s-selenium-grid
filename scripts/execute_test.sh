#!/bin/bash
OUTPUT_FOLDER=./tests_output/screenshots/*
timestamp=$(date +"%Y%m%d_%H%M")

./node_modules/.bin/nightwatch

printf '${IBMCLOUD_PASSWORD}\n' | ibmcloud login -a cloud.ibm.com -r us-south -u ${IBMCLOUD_USER}
sleep 30
export COS_ADMIN_TOKEN=$(ibmcloud iam oauth-tokens | grep IAM | awk '{print($4)}')

for file in $OUTPUT_FOLDER
do
  echo "Processing $file file..."
  curl -X "PUT" "https://s3.us-south.cloud-object-storage.appdomain.cloud/${IBMCLOUD_BUCKET}/${timestamp}-${file}" \
       -H "x-amz-acl: public-read" \
       -H "Authorization: Bearer $COS_ADMIN_TOKEN" \
       -H "Content-Type: image/png" \
       -T $file
done