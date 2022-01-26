const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = async (client, message, args, numero, prefix) => {
  const embed = new Discord.MessageEmbed()
  .setColor(config.color)
  .addField("Invita a Wumpus Chan!", "[Invitar](BOT-INVITE-LINK)")
  message.channel.send(embed)
}

module.exports.help = {
  name:"invitar"
}
