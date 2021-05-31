const Discord = require('discord.js')
const reverse = require('text-reverse')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {

if (message.author.id == "FORBIDDEN USER ID"){message.channel.send("❌ | Se te ha prohibido utilizar este comando!"); return}//This thing is SUPER STUPID, better use some database instead of this.

  let text = args.join(' ')
  if(!text) return message.channel.send("❌ | Agrega algo a sugerir")


  const embed = new Discord.MessageEmbed()
  .setColor(config.color)
  .setTitle("📫 Sugerencia Nueva")
  .setDescription(text)
  .setFooter("De: "+message.author.tag, message.author.displayAvatarURL())

  const bm = new Discord.MessageEmbed()
  .setColor(config.color)
  .setTitle("📫 Sugerencia enviada")
  .setDescription("Toma en cuenta que no te responderan, pero que sepas que tu opinión vale mucho! Si usas este comando de mala manera, se te prohibira el uso de este comando.")
  message.channel.send(bm)
  client.users.cache.get("REPER ID WAS HERE. NOW YOURS MUST BE HERE").send(embed)
}

module.exports.help = {
  name:"sugerir"
}
