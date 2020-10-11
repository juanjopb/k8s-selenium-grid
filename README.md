# k8s-selenium-grid
In this repository, you will find the Kubernetes files to deploy selenium-grid to k8s. Follow the instructions on [this blog] (https://medium.com/@juanjosepb/selenium-grid-running-on-ibm-cloud-kubernetes-service-iks-f65b6bf699fc "this blog")
Also, the artifacts to run an E2E test using _**nightwatch.js**_ over a remote (or local) selenium grid. You could provide remote selenium Otherwise local selenium will be started and the test will run a test with differents uses cases on the test page http://www.automationpractice.com.


# Run a test against Selenium Grid
## Pre-requisites
- Docker
- Docker-compose

## Prepare and run the test
Clone the repo and set parameters on the file *config.conf*
**_selenium_remote_host_** if you have a Remote selenium, add the ip address or dns (default localhost)
**_selenium_remote_port_** if you have a Remote selenium, add the port (default 4444)
**_ibmcloud_username_** user to Log In on IBM Cloud 
**_ibmcloud_password_** password to Log In on IBM Cloud 
**_ibmcloud_cos_bucket_** bucket name to upload the results on IBM Cloud 

After set the parameters run the script `./scripts/start.sh`

#### Create Dockerfile
docker build -t nightwatch -f ./nightwatch/Dockerfile .

#### Run Dockerfile
docker run -it nightwatch