const Discord = require('discord.js')
module.exports.run = async (client, message, args, numero, prefix) => {
  let author = message.author.username
  prefix(message.author.username, "none", "enojado", "frases")
  
}

module.exports.help = {
  name:"enojado"
}
