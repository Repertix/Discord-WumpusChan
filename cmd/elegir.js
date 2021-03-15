const Discord = require('discord.js')
const superagent = require("superagent")
module.exports.run = async (client, message, args, numero, prefix) => {
  let opt = args.join(' ').split(' | ')
  if(!opt[0] || !opt[1]) return message.channel.send("❌ | Recuerda poner dos opciones, separa cada una con ' | '")
  let go = [opt[0],opt[1]]
  let result = go[Math.floor((Math.random()*go.length))]
  message.channel.send("🎲 **| Elijo: **"+result)
}

module.exports.help = {
  name:"elegir"
}
