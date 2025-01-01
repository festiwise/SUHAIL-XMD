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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_28_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDY2LFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDc4LFxuICAgICAgICA0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2LFxuICAgICAgICA3NixcbiAgICAgICAgOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDYxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4dDJJUEpnYW5SR3o4Vm5oYkppUm0raGlOc245N1V1dFUrUk5Ucm5uQjZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzIwODUzMDkxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FFN0Q0N0IwMkE3QjFENTBFOTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1NzQ1MzI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInJLWDB0WVhVVExpczVCRW9NakpFR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzYzNDNjMWItZjI5Ny00MmZiLWIyYjgtNzgxYjI4ZWIzYWEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDIxMixcbiAgICAgIDI1MixcbiAgICAgIDMsXG4gICAgICAxNTUsXG4gICAgICAyMTIsXG4gICAgICA5MSxcbiAgICAgIDc0LFxuICAgICAgMjMxLFxuICAgICAgMjEyLFxuICAgICAgMTQ3LFxuICAgICAgMjQ3LFxuICAgICAgMjA1LFxuICAgICAgMTcyLFxuICAgICAgMjI1LFxuICAgICAgMTMxLFxuICAgICAgMTk1LFxuICAgICAgNDEsXG4gICAgICAzNCxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICA2MSxcbiAgICAgIDc2LFxuICAgICAgMTMyLFxuICAgICAgMjI0LFxuICAgICAgMTIzLFxuICAgICAgOTMsXG4gICAgICA2MSxcbiAgICAgIDEyNyxcbiAgICAgIDY2LFxuICAgICAgMjQxLFxuICAgICAgMTY4LFxuICAgICAgMjI2LFxuICAgICAgOTksXG4gICAgICAxNDcsXG4gICAgICAxMjgsXG4gICAgICA3MSxcbiAgICAgIDIxOSxcbiAgICAgIDQ4LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjY5WUVDUUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzIwODUzMDkxODoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIxMjUxNTA2OTU0MzA4OjE0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1lZWsgTWlsbFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05HMmk4QUJFS2krMWJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSWZNNHFDVEZGUWJyZEk4aHFLNUJhelQ5ZmhKQUgyMFJFWmZXazhONjJGST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnMDZhZFBKYVAwK2hya0R2YjF0KzZURGQ3cG1lM2M4TW5IR2F4ejJnUUtXRUd6SHhVeWdKWVFSOVZ5TW1wb0xoRmpNQ2NKNWh3dVFtNklVTUN5SnhoQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2NVpTUkF4OW1TSk5DamJWRVQrdjNhaE1FRUs4c1lLUUlFZ2YwVFAwRmxBS1FaMEl4cXBIVjgrcEZ0Smp2UGQ4RUd1QW5UNkJjdEVKWXloakVLVHlodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyMDg1MzA5MTg6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTc0NTMyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpJOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkk4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibGZSVlY3QjlVUXl4eE5ha2QwQUQycCtCWVBZQjNvNjQzdllxUTZZLzBaUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MDI4NDA0MDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTc0NTMyNDU3OFwifSIKfQ=="  // PUT your SESSION_ID 


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
