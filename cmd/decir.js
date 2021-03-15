const Discord = require('discord.js')
module.exports.run = async (client, message, args, numero, prefix) => {
  const p = args.join(' ')
  if(!p) return message.channel.send("❌ | ¿Quieres que diga algo? No seas timido.")
  message.channel.send(p)
}

module.exports.help = {
  name:"decir"
}
