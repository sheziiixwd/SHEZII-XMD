const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    alias: ["play"],
    react: "🎼",
    desc: "Download high-quality music",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("*🌀𝗘𝗥𝗥𝗢𝗥! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘀𝗼𝗻𝗴 𝗻𝗮𝗺𝗲 𝗼𝗿 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗟𝗶𝗻𝗸🌊*")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
✦♬♪♫𝓢𝓞𝓝𝓖-𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡♫♪♬✦

◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈

❖  𝕿𝖎𝖙𝖑𝖊:  『${deta?.title || "No title"}』

📜  𝕯𝖊𝖘𝖈𝖗𝖎𝖕𝖙𝖎𝖔𝖓: 
『${deta?.description || "No description available"}』

⏳  𝕿𝖎𝖒𝖊𝖘𝖙𝖆𝖒𝖕:  ${deta?.timestamp || "Unknown"}

🕒  𝕬𝖌𝖔:  ${deta?.ago || "Not available"}

👁️  𝖁𝖎𝖊𝖜𝖘:  ${deta?.views?.toString() || "N/A"}

◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈

✨  𝓟𝓸𝔀𝓮𝓻𝓮𝓭 𝓫𝔂 𝓐𝓻𝓼𝓵𝓪𝓷𝓜𝓓 𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵  ✨
`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

// Download audio+document
const res = await fetch(`https://apis.davidcyriltech.my.id/download/ytmp3?url=${url}`);
const data = await res.json();
if (!data.success) return reply("🌀𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗙𝗮𝗶𝗹𝗲𝗱! 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻🌊");

let downloadUrl = data.result.downloadUrl;

// Send audio message 
await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg",caption :"🎧 𝗠𝘂𝘀𝗶𝗰 𝗯𝘆 𝒜𝓇𝓈𝓁𝒶𝓃-𝒰𝓁𝓉𝓇𝒶-𝑀𝒟 🌟"},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"audio/mpeg",fileName:deta.title + ".mp3" ,caption :"📥 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱 𝘄𝗶𝘁𝗵 𝒜𝓇𝓈𝓁𝒶𝓃-𝒰𝓁𝓉𝓇𝒶-𝑀𝒟 💫"},{quoted:mek})

}catch(e){
console.log(e)
reply(`🌀𝗘𝗥𝗥𝗢𝗥! ${e} 🌊`)
}
})

// ======== VIDEO DL ========
cmd({
    pattern: "video",
    react: "🎬",
    desc: "Download HD videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("*🌀𝗘𝗥𝗥𝗢𝗥! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗶𝗱𝗲𝗼 𝗻𝗮𝗺𝗲 𝗼𝗿 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗟𝗶𝗻𝗸🌊*")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
✦𝓥𝓘𝓓𝓔𝓞-𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡 ✦

◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈

❖  𝕿𝖎𝖙𝖑𝖊:  『${deta?.title || "No title"}』

📜  𝕯𝖊𝖘𝖈𝖗𝖎𝖕𝖙𝖎𝖔𝖓: 
『${deta?.description || "No description available"}』

⏳  𝕿𝖎𝖒𝖊𝖘𝖙𝖆𝖒𝖕:  ${deta?.timestamp || "Unknown"}

🕒  𝕬𝖌𝖔:  ${deta?.ago || "Not available"}

👁️  𝖁𝖎𝖊𝖜𝖘:  ${deta?.views?.toString() || "N/A"}

◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈◈

✨  𝓟𝓸𝔀𝓮𝓻𝓮𝓭 𝓫𝔂 𝓐𝓻𝓼𝓵𝓪𝓷𝓜𝓓 𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵  ✨
`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

// Download video+document
const res = await fetch(`https://apis.davidcyriltech.my.id/download/ytmp3?url=${url}`);
const data = await res.json();
if (!data.success) return reply("🌀𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗙𝗮𝗶𝗹𝗲𝗱! 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻🌊");

let downloadUrl = data.result.downloadUrl;

// Send video message
await conn.sendMessage(from,{video:{url:downloadUrl},mimetype:"video/mp4",caption :"🎥 𝗩𝗶𝗱𝗲𝗼 𝗯𝘆 𝒜𝓇𝓈𝓁𝒶𝓃-𝒰𝓁𝓉𝓇𝒶-𝑀𝒟 🌟"},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"video/mp4",fileName:deta.title + ".mp4",caption :"📥 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗱 𝘄𝗶𝘁𝗵 𝒜𝓇𝓈𝓁𝒶𝓃-𝒰𝓁𝓉𝓇𝒶-𝑀𝒟 💫"},{quoted:mek})

}catch(e){
console.log(e)
reply(`🌀𝗘𝗥𝗥𝗢𝗥! ${e} 🌊`)
}
})
