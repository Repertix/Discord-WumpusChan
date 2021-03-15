const Discord = require('discord.js')
const moment = require('moment')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  let online = message.guild.members.cache.filter(o=> o.user.presence.status === 'online').size
  let idle = message.guild.members.cache.filter(o=> o.user.presence.status === 'idle').size
  let dnd = message.guild.members.cache.filter(o=> o.user.presence.status === 'dnd').size
  let offline = message.guild.members.cache.filter(o=> o.user.presence.status === 'offline').size
  
  let max = Math.max(online, idle, dnd, offline)
  let m;
  
  switch(max){
    case 2:{m = "Ausente"; break}
    case 3:{m="No Molestar"; break}
    case 4:{m="Desconectado/a";break}
    default:{m="En Linea"}
  }
  
  const secbed = new Discord.MessageEmbed()
  .setColor(config.color)
  .setTitle('📊 Users status')
  .setDescription(`En Linea:${online} Ausente:${idle} No Molestar:${dnd} Desconectado/a:${offline}`)
  .setFooter(`La mayoría de usuarios estan en modo: ${m}`)
  message.channel.send(secbed)
}

module.exports.help = {
  name:"estados"
}
