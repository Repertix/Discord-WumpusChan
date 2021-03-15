const Discord = require('discord.js')
const moment = require('moment')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
  
  let status;
  let bot = message.author.bot;
  let b;
  switch(user.presence.status){
    case "dnd": status = "No Molestar"; break;
    case "offline": status = "Desconectado/a"; break;
    case "idle": status = "Ausente"; break;
    default: status = "En Linea";
  }
  
  switch(user.bot){
    case true: b = "Es un bot"; break;
    default: b = "No es un bot";
  }
  
  const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle("📑 Información del usuario")
    .addField("🔰 Nombre de usuario", user.tag)
    .addField("🆔 ID", user.id)
    .addField("🏷 Apodo", message.guild.member(user).nickname != null ? message.guild.member(user).nickname : "Ninguno", true)
    .addField("🔧 Fecha de creación", moment.utc(user.createdAt).format("DD/MM/YY"), true)
    .addField("📩 Se unió el", moment.utc(message.guild.member(user).joinedAt).format("DD/MM/YY"),true)
    .addField("🤖 Bot", b, true)
    .addField("🎮 Estado", status, true)
    .setThumbnail(user.displayAvatarURL())
    message.channel.send(embed)
  
  
}

module.exports.help = {
  name:"usuario"
}
