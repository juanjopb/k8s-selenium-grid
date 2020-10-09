# k8s-selenium-grid
Examples to deploy selenium-grid to k8s



# Create Dockerfile
docker build -t nightwatch -f ./nightwatch/Dockerfile .

# Run Dockerfile
docker run -it nightwatch

