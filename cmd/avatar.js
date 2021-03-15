const Discord = require('discord.js')
const superagent = require("superagent")
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
  let embed = new Discord.MessageEmbed()
  .setColor(config.color)
  .setTitle("Avatar de "+user.tag)
  .setImage(user.displayAvatarURL())
  .setFooter("Que avatar tan lindo!")
  message.channel.send(embed)
}

module.exports.help = {
  name:"avatar"
}
