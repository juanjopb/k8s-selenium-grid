#!/bin/bash
OUTPUT_FOLDER=./tests_output/screenshots/*
timestamp=$(date +"%Y%m%d_%H%M")

echo "Starting Test"
./node_modules/.bin/nightwatch

#echo -A '${IBMCLOUD_PASSWORD}' | ibmcloud login -a cloud.ibm.com -r us-south -u ${IBMCLOUD_USER}
if [ -z $IBMCLOUD_APIKEY ] && [ -z $IBMCLOUD_BUCKET ]; then
  echo "No credentials Found to upload the results"
else
  echo "Logging to IBM Cloud"
  ibmcloud login --apikey "${IBMCLOUD_APIKEY}" -a "https://cloud.ibm.com" -r us-south
  sleep 30
  export COS_ADMIN_TOKEN=$(ibmcloud iam oauth-tokens | grep IAM | awk '{print($4)}')

  echo "Upload files"
  for file in $OUTPUT_FOLDER
  do
    echo "Processing $file file..."
    curl -X "PUT" "https://s3.${IBMCLOUD_REGION}.cloud-object-storage.appdomain.cloud/${IBMCLOUD_BUCKET}/${timestamp}-${file}" \
         -H "x-amz-acl: public-read" \
         -H "Authorization: Bearer $COS_ADMIN_TOKEN" \
         -H "Content-Type: image/png" \
         -T $file
  done
fi