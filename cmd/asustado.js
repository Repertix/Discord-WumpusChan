const Discord = require('discord.js')
module.exports.run = async (client, message, args, numero, prefix) => {
  prefix(message.author.username, "none", "asustado", "frases")
}

module.exports.help = {
  name:"asustado"
}
