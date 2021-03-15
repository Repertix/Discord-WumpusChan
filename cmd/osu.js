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
  if(options[0] === "std") {md = 0} else
  if(options[0] === 'taiko') {md = 1} else
  if(options[0] === 'ctb') {md = 2} else
  if(options[0] === 'mania') {md = 3} else
  {return; message.channel.send("❌ | Modo de juego invalido")}
  
  
  api.getUser({u: options[1], m: md}).then(user =>{
    let titlem;
    if (md === 0) titlem = "osu!standard"
    if (md === 1) titlem = "osu!taiko"
    if (md === 2) titlem = "osu!ctb (Catch The Beat)"
    if (md === 3) titlem = "osu!mania"
    
    
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
