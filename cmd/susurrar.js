const Discord = require('discord.js')
module.exports.run = async (client, message, args, numero, prefix) => {
  let mention = message.mentions.users.first()
  if(!mention){message.channel.send("❌ | Necesitas mencionar a alguien!"); return}
  if(mention == message.author) return message.channel.send("❌ | No puedes mencionarte a ti mismo! o.o")
  prefix(message.author.username, mention.username, "susurrar", "frases")
  
  
}

module.exports.help = {
  name:"susurrar"
}
