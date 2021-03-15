const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = async (client, message, args, numero, prefix) => {
  const embed = new Discord.MessageEmbed()
  .setColor(config.color)
  .setTitle("Wumpus Chan | Creditos")
  .addField("Programación", "Repertix#3208(@repertixwashere)")
  .addField("Avatar", "Picrew y utoooooxs")
  .addField("Gifs", "A sus respectivos dueños")
  message.channel.send(embed)
  
}

module.exports.help = {
  name:"creditos"
}
