FROM ber4tbey/disowen:latest

RUN git clone https://github.com/mrclfd/DisOwen /root/DisOwen/
WORKDIR /root/DisOwen/
RUN npm install 
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN yarn add pg pg-hstore
CMD ["node", "bot.js"]






