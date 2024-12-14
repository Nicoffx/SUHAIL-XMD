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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27774726523";




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
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,27774726523";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "27774726523";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_40_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY5LFxuICAgICAgICA4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDcwLFxuICAgICAgICA3MixcbiAgICAgICAgMTcyLFxuICAgICAgICA1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMjM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNixcbiAgICAgICAgMTczLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NixcbiAgICAgICAgMjI1LFxuICAgICAgICA1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MixcbiAgICAgICAgODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtcWxGallpVEN5citwT1lCR1MvZDQrZ3ZYWktnM0c5MnFGOUNyUTBFTVhjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3Nzc0NzI2NTIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RjQ5RkI2QjdENTM0QzQwMzQ2NDA5ODdEMDk4NUZCN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQxNzY0MDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzc3NDcyNjUyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDExQjM0RTc0NTMwNTM3MkU3NDUxNURDNjZFNjE0NTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MTc2NDAxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldRTWxZX2JJU3gtMGw5X1B1UW1hUFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTUyOWU0YmUtZWZhOS00N2YyLTk1OWEtYTFjMTc4MDRlNzAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgOTgsXG4gICAgICA4OSxcbiAgICAgIDEzMyxcbiAgICAgIDE5MyxcbiAgICAgIDgxLFxuICAgICAgNDEsXG4gICAgICAyNTAsXG4gICAgICAzMCxcbiAgICAgIDE0MyxcbiAgICAgIDEwMSxcbiAgICAgIDIzMCxcbiAgICAgIDEwMCxcbiAgICAgIDg3LFxuICAgICAgMzEsXG4gICAgICAyMSxcbiAgICAgIDE1MSxcbiAgICAgIDI2LFxuICAgICAgMjA3LFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICAyMjQsXG4gICAgICAxNDUsXG4gICAgICAxNTEsXG4gICAgICAzMCxcbiAgICAgIDIxNSxcbiAgICAgIDEyLFxuICAgICAgMjUsXG4gICAgICAyMyxcbiAgICAgIDM1LFxuICAgICAgMjQwLFxuICAgICAgMjQ5LFxuICAgICAgODYsXG4gICAgICA1MixcbiAgICAgIDQzLFxuICAgICAgMyxcbiAgICAgIDIwNCxcbiAgICAgIDE5MixcbiAgICAgIDE4OCxcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk0xTFNETkNLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzc3NDcyNjUyMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTIxMjkwMjE5NjAyMTE6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJOaWNv8J+RjPCfj71cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLR042ckFGRUlyZDlib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndnSFdqYUIreWNhU1BwSERoK05wYVg5LzNoTEgwYkpRazl3azgyalZjUVk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTVM0WDNQMHpyTmZML0w5TE5lRDQ4QkZwM1ByUTBKYTdTdk9FZ1RnbHg4ZjRwUXF0M3hEWlVZaE5UckhtRVBjdlI1a0M0T3cralFwNGpXYWdrUUlzQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTUpxY2RhZWJvSk9rRG9kQ05RcTZEMzJjYUtQV1hFTzhnclArL1lOOGpxc3d4K3RQUXpYMjJ0K3pFdXZXTHlVd2FMbmZPV3VrdWNXQ0xsVWJJK2c2aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc3NzQ3MjY1MjM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQxNzYzOTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJN3FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUk3cS5qc29uIjogIntcImtleURhdGFcIjpcInVrcVJaRmdlbFBoL05VbHBHdXJZWW5lYWZDOUhlRzFOVGtndzlBMUlSTGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ0NDU3ODk3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0MTc2NDAxMTk1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Nico.in4k",
  ownername:process.env.OWNER_NAME|| "Nico.in4k",


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
