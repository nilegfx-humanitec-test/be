FROM mhart/alpine-node:8
WORKDIR /be
COPY package.json index.js ./

EXPOSE 5050 5151

RUN npm i --prod
CMD ["node", "index.js"]