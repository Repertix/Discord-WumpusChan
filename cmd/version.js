const Discord = require('discord.js')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("🛠 | Versión Actual")
  .setDescription("1.2 | :bat: :jack_o_lantern: ES EL MES ESPELUZNANTE!\nNuevos comandos han sido añadidos!\n`acurrucar` - Acurrucate con tus amigos\n`asustado` - ¿Estas asustado?\n`fbi` - Mejor no abras la puerta\n`encuesta` - Crea encuestas, deja que la democracia haga su trabajo\n`expulsar` - Hablando de democracia, el rojo se ve sospechoso...\n`iconoSv` - Icono del servidor expandido a 1000 x 1000\n`halloween` - Recibe chicas, decide si darles dulces o no..\n`piano` - Toca una linda melodía\n`pedirDulce` - Pide dulces a tus amigos o a desconocidos\n`spookydance` - Un mes espeluznante no es espeluznante sin un baile espeluznante\n\n Por cierto, sigue a **@wumpuschan** en Twitter, para saber sobre actualizaciones y más!")
  .addField("1.21 | Escuchamos tus sugerencias!","Hemos añadido mas resultados de citas! Algunas curiosas")
  .setThumbnail(client.user.displayAvatarURL())
  .setImage("https://media.tenor.com/images/863516c57095de4e5425a77d83db0d6b/tenor.gif")
  message.channel.send(embed)
}

module.exports.help = {
  name:"version"
}
