const Discord = require('discord.js')
const config = require("../config.json")
const osu = require('node-osu')
const api = new osu.Api('a07ff6f38d977575e967c53933ba2c6b6fada5fc',{
  notFoundAsError: true, // Reject on not found instead of returning nothing. (default: true)
    completeScores: false
})
module.exports.run = async (client, message, args, numero, prefix) => {
  let option = args.slice(0).join(' ')
  let options = option.split(' ')
  if(!options[0]) return message.channel.send("❌ | Selecciona un modo <std/mania/taiko/ctb>.")
  if(!options[1]) return message.channel.send("❌ | Incluye el usuario que quieras buscar")
  let md;
   switch(options[0])
     case "std":
     md = 0
     break
     case "taiko":
     md = 1
     break
     case "ctb":
     md = 2
     break
     case "mania":
     md = 3
     break
     default:
     return message.channel.send("❌ | Modo de juego invalido")
     break
  
  
  api.getUser({u: options[1], m: md}).then(user =>{
    let titlem;
    switch(md)
      case 1:
        titlem = "osu!taiko"
        break
      case 2:
        titlem = "osu!ctb"
        break
      case 3:
        titlem = "osu!mania"
        break
      default:
        titlem = "osu!standard"
        break
    
    
    const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setAuthor(titlem)
    .setTitle(user.name)
    .addField("🆔 ID", user.id, true)
    .setThumbnail(`http://a.ppy.sh/${user.id}`)
    .addField("🎖 Cantidad de calificaciones", `SS+: ${user.counts.SSH} SS: ${user.counts.SS} S+: ${user.counts.SH} S: ${user.counts.S} A: ${user.counts.A}`, true)
    .addField("🌎 País", user.country, true)
    .addField("🎮 Nivel", user.level, true)
    .addField("📈 Porcentaje", user.accuracyFormatted, true)
    .addField("🥇 Clasificación", `Mundial: ${user.pp.rank} Nacional: ${user.pp.countryRank}`, true)
    .addField("📊 Puntaje", user.scores.total, true)
    message.channel.send(embed)
  })
}

module.exports.help = {
  name:"osu"
}
