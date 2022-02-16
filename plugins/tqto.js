/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let moment = require('moment-timezone')
let fetch = require('node-fetch')
let handler = async (m) => {
    bear = "THANKS ALL"
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `
*BIG THANKS TO*

Nurutomo : 
https://github.com/Nurutomo

Istikmal : 
https://github.com/BochilGaming

Ariffb : 
https://github.com/Ariffb25

Cocopie :
https://github.com/iCocopie

KingOfBear : 
https://github.com/SaipulAnuar

Ilham : 
https://github.com/Ilhamskhzyi

`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: tqto,
           locationMessage: { 
           jpegThumbnail: await (await fetch(fla + bear)).buffer() }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Source Code',
               url: `https://github.com/iCocopie/CocoBotzV8`
             }

           },
       
               {
             quickReplyButton: {
               displayText: 'Back To Menu',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i

module.exports = handler
