# XYZ Docker NodeJS #

This image is an default docker image for NodeJS.

**Build:** 

    docker build -t my-nodejs-app .

**Run:** 

    docker run -p 3000:3000 -it --rm --name my-running-app my-nodejs-app


In this case we run the application at port 3000 so don't forget to expose port 3000 in VirtualBox Manager.
