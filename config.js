/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
DisOwen - Ber4tbey
*/



const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './disowen.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v0.2.0 Public Beta',
    TOKEN: process.env.BOT_TOKEN === undefined ? '' : process.env.BOT_TOKEN,
    PREFIX: process.env.PREFIX === undefined ? ',' : process.env.PREFIX,
    STAT: process.env.STATUS === undefined ? 'online' : process.env.STATUS,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,
    BRANCH: 'master',
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './disowen.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    AFK_MESSAGE: process.env.AFK_MESSAGE === undefined ? "*I'm not available right now.*" : process.env.AFK_MESSAGE,
    BOTLOG: process.env.BOTLOG === undefined ? false : process.env.BOTLOG,
    BOTLOG_CHATID: process.env.BOTLOG_CHATID === undefined ? '0' : process.env.BOTLOG_CHATID,    
    }
    

