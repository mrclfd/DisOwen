/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
DisOwen - Ber4tbey
*/


const Owen = require('../../bot');
const Language = require('../../language');
const Lang = Language.getString('weather');

module.exports.run = async (bot, message, args) => {
    let lokasi = args[0];
    if (!args[0]) {
        Owen.editmsg(message,Lang.NEED_LOCATION)
        return
    }
    
   // message.delete();
    
    message.channel.send("", {
        files: [
            `https://wttr.in/${lokasi}_0tqp_lang=id.png`
        
        ],
          
    })
    message.channel.send(`**Data cuaca daerah ${lokasi} ditemukan.**`)
        
        
          
}
    

module.exports.config = {
    command: "weather",
    usage: "jakarta",
    description: `${Lang.WEATHER_DESC}`
}
