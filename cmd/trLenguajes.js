const Discord = require('discord.js')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Lenguajes Disponibles")
  .setDescription("El traductor funciona gracias a **Yandex**, para saber que idiomas soporta el traductor, visita la pagina dando [Click aquí](https://tech.yandex.com/translate/doc/dg/concepts/api-overview-docpage/)")
  .setColor(config.color)
  .setFooter("Gracias por utilizar a Wumpus Chan!")
  .setThumbnail(client.user.displayAvatarURL())
  message.channel.send(embed)
}

module.exports.help = {
  name:"trLenguajes"
}
