# XYZ Docker NodeJS #

This image is a default docker image for NodeJS.

## Local development ##

Just run the following commands

    npm install
    node server/server.js

You should now see a statically served index.html file if you go to
http://localhost:9000

## Testing for live deploy ##

Before deploying your code you can test it with a local docker installation
by running the following commands

**Build:** 

    docker build -t my-nodejs-app .

**Run:** 

    docker run -p 9000:9000 -it --rm --name my-running-app my-nodejs-app


In this case we run the application at port 9000 so don't forget to expose port 9000 in VirtualBox Manager.
