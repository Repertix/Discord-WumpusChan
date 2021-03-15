const Discord = require('discord.js')
const db = require('quick.db')
const config = require("../config.json")
const ball = require("../8ball.json")
module.exports.run = async (client, message, args, numero, prefix, logOn) => {
  let ask = args.join(' ')
  if(!ask){message.channel.send("❌ | Necesito preguntas, para liberar las respuestas e.e"); return}
  
  const ans = ball.respuestas
  const an = ans[Math.floor((Math.random()*ans.length))]
  
  const embed = new Discord.MessageEmbed()
  .setTitle("🎱 | 8 Ball")
  .addField("Pregunta", ask)
  .addField("Respuesta", an)
  .setFooter("Pregunta por: "+message.author.username)
  .setColor(config.color)
  .setThumbnail(client.user.displayAvatarURL)
  message.channel.send(embed)
}

module.exports.help = {
  name:"8ball"
}
