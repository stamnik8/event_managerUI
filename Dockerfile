#Specify base image
FROM node:alpine
WORKDIR '/app'
COPY /package.json .
#Install some dependencies
RUN npm install
#split copy to 2 steps so you can avoid npm install every time you make a change . Now the npm install will run only if package.json changes
COPY . .
#Default command
CMD ["npm", "run", "start"]
