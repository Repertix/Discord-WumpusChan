const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = async (client, message, args, numero, prefix) => {
  const embed = new Discord.MessageEmbed()
  .setColor(config.color)
  .addField("Invita a Wumpus Chan!", "[Invitar](https://discordapp.com/oauth2/authorize?client_id=724774897183883315&scope=bot&permissions=8)")
  message.channel.send(embed)
}

module.exports.help = {
  name:"invitar"
}
