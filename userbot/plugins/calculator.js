/* Copyright (C) 2022 @mrclfd.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WeebProject - Marcel Faraday
*/

const Discord = require('discord.js-owen');
const Owen = require("../../bot");
module.exports.run = async (bot, message, args) => {

// CMD_HELP
const calc = "Menghitung layaknya kalkulator sederhana."
const valid = "*Masukkan format dengan benar!*\n\n*Seperti ini:*\n.calc 666 + 13\n.calc 666 × 13\n.calc 666 : 13\n.calc 666 - 13"
const sukses = "*Perhitungan Selesai ✅*\n*Hasil:* "
const gagal = "*Perhitungan Gagal ❌*\n*Kesalahan:* \n"

  if (match[1].length < 4) { return await message.channel.send(message) }
   
        if (match[1].includes('+')) { var split = match[1].split('+'), sonsayi = split[1], ilksayi = split[0]
            var result = -(-ilksayi - sonsayi)
            try { await message.channel.send(message, sukses + result) }
            catch (err) { return await message.channel.send(message, gagal + err);
            }
        }
}
 /*       else if (match[1].includes('-')) { var split = match[1].split('-'), sonsayicik = split[1], ilksayicik = split[0] 
            var result = ilksayicik - sonsayicik
            try { await message.client.sendMessage(message.jid, sukses + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid, gagal + err, MessageType.text);
            }
        }
        else if (match[1].includes('×')) { var split = match[1].split('×'), sonsayicarp = split[1], ilksayicarp = split[0] 
            var result = ilksayicarp * sonsayicarp
            try { await message.client.sendMessage(message.jid, sukses + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid, gagal + err, MessageType.text);
            }
        }
        else if (match[1].includes(':')) { var split = match[1].split(':'), sonsayibol = split[1], ilksayibol = split[0] 
            var result = ilksayibol / sonsayibol
            try { await message.client.sendMessage(message.jid, sukses + result, MessageType.text) }
            catch (err) { return await message.client.sendMessage(message.jid, gagal + err, MessageType.text)
            }
        } */
  
module.exports.config = {
    command: "calc",
    description: `KONTOL`
}
