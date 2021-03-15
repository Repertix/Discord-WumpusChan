const Discord = require('discord.js')
const Canvas = require('canvas')
const hm = require("../halloweenRecib.json")
module.exports.run = async (client, message, args, numero, prefix, logOn) => {
 let user = message.mentions.users.first()
 if(!user) return message.channel.send("❌ | Menciona a alguien")
 if(user == message.author) return message.channel.send("❌ | No puedes darte dulces asi")
  message.channel.send(`Hey, ${user}! ${message.author} esta en tu puerta pidiendo dulces! Si quieres darle dulces, di **dulce**. O solo espera a que termine el tiempo...`)
  const collector = new Discord.MessageCollector(message.channel, m => m.author.id == user.id, {max:1, time:60000})
collector.on('collect', message => {
  let me = message.content.toLowerCase()
            if (me == "dulce") {
                message.channel.send(`Muy bien! ${user} le ha dado un par de dulces a ${message.author}`);
            } 
        })

collector.on('end', m =>{
  if(m.size < 1){message.channel.send(`Oh... que mal, ${message.author}, talvez para la proxima`);}
})
}

module.exports.help = {
  name:"pedirDulce"
}
