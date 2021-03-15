const Discord = require('discord.js')
module.exports.run = async (client, message, args, numero, prefix) => {
  prefix(message.author.username, "none", "confuso", "frases")
  
}

module.exports.help = {
  name:"confuso"
}
