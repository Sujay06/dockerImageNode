FROM node:8

# Create app working directory
WORKDIR /usr/src/app 

# Install  required app dependencies
COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production
RUN npm install

# Bundle app source to the working directory
COPY . .

#Expose port for the container to run process
EXPOSE 8080

#start NPM at run time
CMD [ "npm", "start" ]
