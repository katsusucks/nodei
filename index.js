const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
token: "Discord Bot Token",
prefix: "Discord Bot Prefix", //!
intents: ["MessageContent", "Guilds", "GuildMessages"]
})
bot.onMessage()

bot.command({
name: "install",
code: `$title[1;Install]
$image[1;https://nodei.co/npm/$message.png?downloads=true]`
})
