
const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", (msg) => {
  if (msg.content === "yell") {
    msg.reply("SIR YES SIR!")
  }
})

client.login("NzUzOTUyODQzODI3NzczNDgy.X1trTQ.GCNAAb-B8ApdZWB1nOn3FgpRE7U")