const Discord = require('discord.js')
module.exports.run = async (client, message, args, numero, prefix) => {
  let user =  message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
  prefix(message.author.username, user, "fbi", "frases")
}

module.exports.help = {
  name:"fbi"
}
