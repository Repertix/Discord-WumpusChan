const Discord = require('discord.js')
const cita = require("../cita.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  let mention = message.mentions.users.first()
  if(!mention) return message.channel.send("Menciona a alguien, no seas timido.")
  if(mention.bot && mention.id != "724774897183883315"){message.channel.send("No puedes pedirle una cita a un bot ¬_¬"); return}
  
  let sc = Math.floor(Math.random() * 9)
  let sucesos = cita.resultados[sc].sucesos
  let resultado = cita.resultados[sc].resultado

  //message.channel.send(`Cita con ${mention.username}\n${pro}`)
  //message.channel.send("```Resultado: "+resultado+"```")

const textTitle = cita.resultados[sc].sucesos
const regEx = new RegExp('{author}', "g");
const regEz = new RegExp('{mention}', "g")
const result = textTitle.replace(regEx , message.author.username);
const resulta = result.replace(regEz, mention.username)
message.channel.send(`Cita con ${mention.username}\n${resulta}`)
message.channel.send("```Resultado: "+resultado+"```")
}

module.exports.help = {
  name:"cita"
}
