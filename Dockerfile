# Vi behöver en bas-image (samma som användes i run-kommandot)
FROM dockerfile/nodejs

RUN npm install -g pm2

ADD package.json /app/package.json

# Install production dependencies.
RUN cd /app && npm install --production

# Add the rest of the project to a folder app in the container.
ADD . /app

# Ställ in working directory för appen:
WORKDIR /app

# Exponera rätt port (plockas automatiskt upp av Katalog som ser till att Nginx redirectar till denna)
# gör även att man kan använda parametern `-P` till `docker run`, som automatiskt portmappar alla exponerade portar mot slumpade portar (kör `docker port <container-id> 3000` för att veta vilken slumpad port det blev)
EXPOSE 3000

CMD pm2 start --name app /app/src/server.js && pm2 logs app