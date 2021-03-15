const Discord = require('discord.js')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("🛠 | Comandos")
  .setDescription("Prefix `w/` \nServidores `"+client.guilds.cache.size+"`\nNueva versión `w/version`\nLa mayoria de comandos estan en español\n¿Alguna Sugerencia? `w/sugerir`")
  .addField("Roleplay", "`abrazar` `acariciar` `acurrucar` `animo` `alimentar` `aplaudir` `asustado` `bailar` `baka` `beber` `besar` `cachetear` `cita` `correr` `confuso` `dormir` `enojado` `golpear` `llorar` `piano` `reir` `sonrojar` `susurrar` `cafe`")
  .addField("Imagenes", "`especiales` `expulsar` `logro` `sans` `sonic` `tarjeta`")
  .addField("Diversión", "`8ball` `elegir` `fbi` `galleta` `gato` `juzgarWaifu` `perro` `pescar` `rps` `voltear`")
  .addField("Busqueda", "`anime` `clima` `lol` `osu` `pokemon` `roblox` `steam` `traducir`")
  .addField("Halloween", "`halloween` `pedirDulce` `spookydance`")
  .addField("Otros", "`avatar` `creditos` `encuesta` `iconoSv` `info` `invitar` `trLenguajes` `usuario`")
  .setFooter("¿Tienes dudas? usa w/faq")
  .setColor(config.color)
  .setThumbnail(client.user.displayAvatarURL())
  message.channel.send(embed)
}

module.exports.help = {
  name:"ayuda"
}
