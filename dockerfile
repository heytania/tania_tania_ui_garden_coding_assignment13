# pull official base image
FROM node:16-alpine
# set working directory to the specified 'lastName_firstName_site'
WORKDIR /tania_tania_ui_garden_coding_assignment13
# add `tania_tania_ui_garden/node_modules/.bin` to $PATH
ENV PATH /tania_tania_ui_garden_coding_assignment13/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
# add app
COPY . ./
# start app
CMD ["npm", "run", "storybook"]
