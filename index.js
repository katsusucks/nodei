const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: "DISCORD_BOT_TOKEN",
    intents: ["messageContent", "guilds", "guildMessages"],
    prefix: "DISCORD_BOT_PREFIX" //!
})

bot.onMessage()

bot.command({
name: "install",
code: `$title[1;Install]
$image[1;https://nodei.co/npm/$message.png?downloads=true]`
})
