const Discord = require('discord.js')
const moment = require("moment");
const fs = require('fs')
require('moment-duration-format');
const config = require("../config.json")

module.exports.run = async (client, message, args, numero, prefix) => {

  
  fs.readdir('./cmd', (err, files) =>{
  let ping = message.client.ws.ping
  const actividad = moment.duration(client.uptime).format("D [dias], H [hrs], m [mins], s [secs]")
  const embed = new Discord.MessageEmbed()
  .setTitle("Mi estado actual 📋❤")
  .setColor("7289d9")
  .addField("Ping", "**"+ping+"ms**", true)
  .addField("Activo desde", "**"+actividad+"**", true)
  .addField("Comandos", "**"+files.length+"**", true)
  .setFooter("Pong! 🏓")
  message.channel.send(embed)
  })
  
  
  
}

module.exports.help = {
  name:"info"
}
