# k8s-selenium-grid
**Contents**
- [k8s-selenium-grid](#k8s-selenium-grid)
- [Run a test against Selenium Grid](#run-a-test-against-selenium-grid)
  - [Run Only one Click](#run-only-one-click)
    - [Pre-requisites](#pre-requisites)
    - [Prepare and run the test](#prepare-and-run-the-test)
  - [Run Manually](#run-manually)
    - [Pre-requisites](#pre-requisites-1)
    - [Prepare install and Run](#prepare-install-and-run)
  - [To build the Dockerfiles](#to-build-the-dockerfiles)
    - [Create Dockerfile](#create-dockerfile)
    - [Run Dockerfile](#run-dockerfile)

In this repository, you will find the Kubernetes files to deploy selenium-grid to k8s, Follow the instructions on [This blog](https://medium.com/juanjosepb/selenium-grid-running-on-ibm-cloud-kubernetes-service-iks-f65b6bf699fc)

There are also, the artifacts to run an E2E test using _**nightwatch.js**_ over a remote (or local) selenium grid. You could provide remote selenium grid server Otherwise local selenium will be started (using docker-compose) and the test (using a Dockerfile) will run a test with differents uses cases on the test page http://www.automationpractice.com, if the parameters are set correcly, the results of the tes will be Uploaded to an IBM Cloud Object Storage (COS)


# Run a test against Selenium Grid

There are prepared two ways to run the test, with a script to run all the components or manually.

## Run Only one Click
This option is a wrap to run all the components of the test from a script, based on a configuration file.

### Pre-requisites
- Docker
- Docker-compose

### Prepare and run the test
Clone the repo and set parameters on the file **config.conf**
- **_selenium_remote_host_** if you have a Remote selenium, add the ip address or dns (default localhost)
- **_selenium_remote_port_** if you have a Remote selenium, add the port (default 4444)
- **_ibmcloud_username_** user to Log In on IBM Cloud 
- **_ibmcloud_apikey_** APIKEY generated on IAM Cloud to allow upload the results.
- **_ibmcloud_cos_bucket_** bucket name to upload the results on IBM Cloud 

After set the parameters run the script `./scripts/start.sh`
The script will be check the parameters file (_config.cong_) and depends of the configuration, if it's not an remote Selenium grid server set, by defaul will be use the Localhost spinning up the Selenium hub and Node, using docker-compose, next a Dockerfile is built will ran the test inside. after the results are ready, if the parameters to upload the results are set, those will be upload to an IBM Cloud Object Storage

## Run Manually
With this option you could run the _nightwach.js_ test on your own workstation.

### Pre-requisites
- Nodejs installed
- Docker-compose

### Prepare install and Run
Clone the repo and set parameters on the file *config.conf*
- `cd nigthwatch`
- `npm install` 
- `npm install -g nightwatch`
- `npm install --save-dev nightwatch-record selenium-webdriver chromedriver`

on the file _nightwatch.conf.js_ be sure you have set the parameters _host_ and _port_

```javascript
  "selenium": {
      "start_process": false,
      "host" : "localhost",
      "port" : "4444",
      "cli_args" : {
        "webdriver.chrome.driver" : "./bin/chromedriver"
      }
  },
```
Go to the folder _nightwatch_ `cd nightwatch` and run `docker-compose up` after all services show in running state, you are able to run nightwatch

`./node_modules/.bin/nightwatch` 

## To build the Dockerfiles

### Create Dockerfile
Clone the repository, located on the root of the repo.
`docker build -t nightwatch-test -f ./nightwatch/Dockerfile .`

### Run Dockerfile
`docker run -it nightwatch-test`