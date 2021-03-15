const Discord = require('discord.js')
const reverse = require('text-reverse')
module.exports.run = async (client, message, args, numero, prefix) => {
  let text = args.join(' ')
  if(!text) return message.channel.send("❌ | Introduce un texto para voltear")
  
  const result = reverse(text)
  message.channel.send(result)
}

module.exports.help = {
  name:"voltear"
}
