const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args, numero, prefix, logOn) => {
  let users = message.mentions.users.first()
  if(!users) return message.channel.send("❌ | Contra quien vas a jugar?")
  if(users == message.author){message.channel.send("❌ | No seas tramposo ewe"); return}
  
  
  let opciones = ["👊","✌","✋"]
  
  let p1 = opciones[Math.floor((Math.random()*opciones.length))]
  let p2 = opciones[Math.floor((Math.random()*opciones.length))]
  
  message.channel.send(p1+" vs. "+p2)
  if(p1 == "👊" && p2 == "👊") return message.channel.send("Es un empate!")
  if(p1 == "✌" && p2 == "✌") return message.channel.send("Es un empate!")
  if(p1 == "✋" && p2 == "✋") return message.channel.send("Es un empate!")
  
  if(p1 == "✋" && p2 == "👊") return message.channel.send(`**${message.author.username}** ha ganado!`)
  if(p1 == "✌" && p2 == "✋") return message.channel.send(`**${message.author.username}** ha ganado!`)
  if(p1 == "👊" && p2 == "✌") return message.channel.send(`**${message.author.username}** ha ganado!`)
  
  if(p2 == "✋" && p1 == "👊") return message.channel.send(`**${users.username}** ha ganado!`)
  if(p2 == "✌" && p1 == "✋") return message.channel.send(`**${users.username}** ha ganado!`)
  if(p2 == "👊" && p1 == "✌") return message.channel.send(`**${users.username}** ha ganado!`)
  
  
  
}

module.exports.help = {
  name:"rps"
}
