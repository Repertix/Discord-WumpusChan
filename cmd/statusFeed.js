const Discord = require('discord.js')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  const embed = new Discord.MessageEmbed()
  .setColor(config.color)
  .setTitle("Estado del bot")
  .setDescription("Todo perfecto!")
  .addField("Error Reciente", "Sin errores")
  message.channel.send(embed)
}

module.exports.help = {
  name:"statusFeed"
}
