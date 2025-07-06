const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO 👨‍💻* 

*🔥 ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: Shezii-Ultra-XMD*
🔥 *ɴᴜᴍʙᴇʀ* -: 923190131307
🔥 *ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029VbB643KFCCoe0MbP7G0Z

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ  SheziiXMD Official*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/6dqp7u.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
