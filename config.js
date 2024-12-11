const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_35_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMyLFxuICAgICAgICA1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc4LFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM5LFxuICAgICAgICA4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc1LFxuICAgICAgICA5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI4LFxuICAgICAgICA1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDM4LFxuICAgICAgICA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDM0LFxuICAgICAgICA4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODQsXG4gICAgICAgIDY5LFxuICAgICAgICA1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICA5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInFwVjVocjc5eThpZkN3VmNndWJJN1h4bWZDMktFbjBIUUFIUlovNkNOck09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTIwNDQxMDI4NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBMkYzOTgxMUE4NzAyODM2NUQ0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzkxMzI3MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuQWpmX2NYM1FzU1hJZ3VfWDRfNlhBXCIsXG4gIFwicGhvbmVJZFwiOiBcImJlNGFkNjYxLTI5ZWItNDgzMi05OTdmLWE3NTczYzc1ZDE2YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICA0MCxcbiAgICAgIDE3NCxcbiAgICAgIDIxMSxcbiAgICAgIDE3NixcbiAgICAgIDIwNCxcbiAgICAgIDEwNCxcbiAgICAgIDEyNixcbiAgICAgIDE0MSxcbiAgICAgIDE1LFxuICAgICAgNzUsXG4gICAgICAyMDksXG4gICAgICAxOSxcbiAgICAgIDI2LFxuICAgICAgMTU2LFxuICAgICAgNjAsXG4gICAgICAxNzEsXG4gICAgICAyMDYsXG4gICAgICA1MSxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICAxOTIsXG4gICAgICAyMDAsXG4gICAgICAxOTIsXG4gICAgICAyOCxcbiAgICAgIDIxNyxcbiAgICAgIDE2MixcbiAgICAgIDc5LFxuICAgICAgMjM0LFxuICAgICAgMTE3LFxuICAgICAgMjE3LFxuICAgICAgMjIzLFxuICAgICAgNjAsXG4gICAgICAyNTEsXG4gICAgICAyMzIsXG4gICAgICAxODQsXG4gICAgICA5NyxcbiAgICAgIDI0MCxcbiAgICAgIDE5LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldDTk01Q0xEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxMjA0NDEwMjg0MzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTUwNzkyNjQ2Mjg5NTc6MTRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWlkZW4gQXlycmEg8J+Si+KdpO+4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tpRGdvQURFTERWNWJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTE9ITmNtYzVZeTdTbVZsNXhIUjc0TDRQYnBCV0t3NUZGTE9sTXNrWnZtQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnUVNpMmRLWnc0c3dLNEIxYnF4cmJEakxrSnppajltQ1krT2VOdGpGbCt2ZVlieUdiYlFlTVl2ZlJXNG52bDRNK2dPL1BOSXpsdDN4SVhWZXBVMmNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyNGxKWmxnNU1KSTBndDZPUFV3aW9PcVFSczVENkNjQmxMRXJGTGNtOFJhbXBvTlgvMk45bE42ckpXNmtacWl2cTNJc01zdzZyd0NkdjN4TEJyU1hoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxMjA0NDEwMjg0MzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzkxMzI2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhOVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSE5WLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
