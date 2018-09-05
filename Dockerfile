FROM node:carbon
# set working directory
##RUN mkdir /
#WORKDIR /
COPY . .
# add `/usr/src/app/node_modules/.bin` to $PATH
#ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json package.json
RUN npm set registry http://192.168.164.132:4873/
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# start app
CMD ["npm", "start"]