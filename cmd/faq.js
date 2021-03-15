const Discord = require('discord.js')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Preguntas AUN NO frecuentes")
  .addField("¿Que pasa si el bot se esta reiniciando mucho?", "Si el bot recibe reinicios constantes es debido a que esta en fase de mantenimiento para una nueva actualización")
  .addField("¿Si el bot no esta conectado o encuentro algún error?", "Puedes contactar en twitter a @repertixwashere el se asegura del cuidado del bot y resolverá cualquier error")
  .addField("¿Que idiomas estan disponibles en el traductor?", "Puedes obtener mas información usando w/trLenguajes")
  .addField("¿Por que cuando menciono a Wumpus Chan con el comando w/tonto dice -1%? ¿Es un bug?", "Es adrede. Ella es muy lista")
  .addField("¿Como podremos ponernos al tanto de actualizaciones y bugs?", "Aun trabajamos en eso...")
  .addField("¿Cuál es la bebida favorita de Wumpus Chan?", "El café helado.")
  .addField("¿Que pasa si de en vez en cuando el bot se desactiva y se vuelve a activar?", "Esto se debe a nuestro host actual, es uno gratuito por momento y planeamos mejorarlo")
  .addField("¿Que pasa si en el comando w/osu los resultados salen null?","Esto se debe a que la cuenta debe ser nueva o lleva tiempo pero nunca fue usada.")
  .setColor(config.color)
  message.channel.send(embed)
}

module.exports.help = {
  name:"faq"
}
