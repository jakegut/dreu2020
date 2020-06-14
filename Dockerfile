FROM node

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

RUN npm install -g nodemon

ENV PATH /usr/src/node_modules/.bin:$PATH

COPY . .

CMD ["nodemon", "index.js"]