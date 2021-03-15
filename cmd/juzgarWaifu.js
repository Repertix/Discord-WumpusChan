const Discord = require('discord.js')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  let waifu = args.join(' ')
  if(!waifu) return message.channel.send("Quién es tu waifu?")
  let rate = Math.floor(Math.random()*10)
  let suggest;
  
  if(rate <= 4){suggest = "Lo siento, es muy feo/a"}else
  if(rate <= 6){suggest = "Esta bien."}else
  if(rate <= 8){suggest = "Es muy bueno/a"}else
  if(rate <= 10){suggest = "Es hermoso/a. Una pieza maestra!"}
  
  const embed = new Discord.MessageEmbed()
  .setColor(config.color)
  .setTitle("Calificación de Waifu")
  .setDescription(`Le doy a tu waifu: **${waifu}** un ${rate}/10`)
  .addField("Sugerencia", suggest)
  .setImage("https://iforo.3djuegos.com/files_foros/3z/3zop.png")
  message.channel.send(embed)
}

module.exports.help = {
  name:"juzgarWaifu"
}
