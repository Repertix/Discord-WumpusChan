const Discord = require('discord.js')
const config = require("../config.json")
const superagent = require('superagent')
module.exports.run = async (client, message, args, numero, prefix) => {
  let msg = args.join('+')
  if(!msg) return message.channel.send("❌ | Cuál es el logro?")
  if(msg.length > 20) return message.channel.send("❌ | El nombre del logro no puede pasar de los 22 caracteres")
  superagent.get("https://minecraftskinstealer.com/achievement/1/Logro+Obtenido%21/"+msg).end((err,res)=>{

    const atch = new Discord.MessageAttachment(res.body, "CharWasHere.png")
    message.channel.send("Has conseguido un logro!", atch)
  })
}

module.exports.help = {
  name:"logro"
}
