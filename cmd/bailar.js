const Discord = require('discord.js')
module.exports.run = async (client, message, args, numero, prefix) => {
  let user = message.mentions.users.first()
  if(!user){prefix(message.author.username, "none", "bailar", "frases")}
  if(user){prefix(message.author.username, user.username, "bailar", "frases2")}
}

module.exports.help = {
  name:"bailar"
}
