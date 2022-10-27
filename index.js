const aoi = require("aoi.js")
const bot = new aoi.Bot({
token: "DISCORD-BOT-TOKEN",
prefix: "DISCORD-BOT-PREFIX",
intents: ["GUILDS", "GUILD_MESSAGES"]
})
bot.onMessage()
bot.command({
name: "install",
code: `$title[1;Install]
$image[1;https://nodei.co/npm/$message.png?downloads=true]`
}`
