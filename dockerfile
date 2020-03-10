FROM mhart/alpine-node:8
WORKDIR /be
COPY package.json index.js ./

RUN npm i --prod
CMD ["node", "index.js"]