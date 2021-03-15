const Discord = require('discord.js')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  let pescado = Math.floor(Math.random() * 9)
  let p;
  switch(pescado){
    case 2:{p="Has pescado un 🐠. Muy bien!"; break}
    case 3:{p="Has pescado un 🐡. No esta mal"; break}
    case 4:{p="Has pescado un 🦈. La mejor pesca del momento!"; break}
    case 5:{p="Has pescado una 🥾. Intentalo de nuevo"; break}
    case 6:{p="No has pescado nada! Intentalo de nuevo"; break}
    default:{p="Has pescado un 🐟. Buen trabajo"}
  }
  
  let embed = new Discord.MessageEmbed()
  .setColor(config.color)
  .setTitle("Hora de pesca!")
  .setDescription(p)
  .setThumbnail(message.author.displayAvatarURL())
  message.channel.send(embed)
  
}

module.exports.help = {
  name:"pescar"
}
