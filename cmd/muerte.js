const Discord = require('discord.js')
const superagent = require("superagent")
module.exports.run = async (client, message, args, numero, prefix) => {
  let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
  let msg = Math.floor(Math.random() * 15)//Lo agarre de un código viejo, por eso los pinches IF excesivos xD
  
  if(msg === 0){message.channel.send(`> ${user.username} hizo un bruh moment`)}
  if(msg === 1){message.channel.send(`> ${user.username} fue enviado a Iran`)}
  if(msg === 2){message.channel.send(`> ${user.username} piso un lego`)}
  if(msg === 3){message.channel.send(`> ${user.username} fue invadido por las leyendas de la sombra`)}
  if(msg === 4){message.channel.send(`> ${user.username} se comio un tiepod`)}
  if(msg === 5){message.channel.send(`> ${user.username} fue asesinado por ${user.username}`)}
  if(msg === 6){message.channel.send(`> ${user.username} fue asesinado por ${message.author.username}`)}
  if(msg === 7){message.channel.send(`> ${user.username} fue rickroleado`)}
  if(msg === 8){message.channel.send(`> ${user.username} hizo un tweet politico`)}
  if(msg === 9){message.channel.send(`> ${user.username} desafió al admin`)}
  if(msg === 10){message.channel.send(`> ${user.username} no guardo antes de salir`)}
  if(msg === 11){message.channel.send(`> ${user.username} salio sin su cubrebocas`)}
  if(msg === 12){message.channel.send(`> ${user.username} fue rickroleado`)}
  if(msg === 13){message.channel.send(`> ${user.username} hizo muchos clicks al google chrome`)}
  if(msg === 14){message.channel.send(`> ${user.username} sacó un final malo en Helltaker`)}
  if(msg === 15){message.channel.send(`> ${user.username} ha leido un badfic`)}
}

module.exports.help = {
  name:"muerte"
}
