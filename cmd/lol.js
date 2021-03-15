const Discord = require('discord.js')
const superagent = require('superagent')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  const rendreg = args[0]
  const opt = args.slice(1).join(' ')
  if(!rendreg) return message.channel.send("❌ | Incluye la región del jugador. Ejemplo: la1 | na1")
  if(!opt) return message.channel.send("❌ | Incluye el nombre del invocador")
  const embed = new Discord.MessageEmbed()
  .setColor(config.color)
  .setTitle("League Of Legends")
  superagent.get(`https://${rendreg}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${opt}?api_key=RGAPI-d3e03a65-401b-422c-a327-d96f1ddf0481`).end((err, res)=>{
    if(err) return message.channel.send("❌ | Un error ocurrió durante la busqueda. Asegurate de que el usuario que busques sea de la región que proporcionaste").then(console.log(err))
    if(res.body.status) return message.channel.send("❌ | Hubo un error en los servidores interno. Intentalo mas tarde.").then(console.log(res.body))
    embed.addField("🔮 Nombre de Invocador", res.body.name)
    embed.addField("🔰 Nivel", res.body.summonerLevel,true)
    embed.setThumbnail(`http://ddragon.leagueoflegends.com/cdn/9.24.2/img/profileicon/${res.body.profileIconId}.png`)
    
    
    superagent.get(`https://${rendreg}.api.riotgames.com/lol/match/v4/matchlists/by-account/${res.body.accountId}?api_key=RGAPI-d3e03a65-401b-422c-a327-d96f1ddf0481`).end((err, res) =>{
      const m = res.body.matches[0]
      embed.addField("🎮 Partidas jugadas", res.body.totalGames,true)
      embed.addField("🏆 ID Del ultimo campeón", m.champion,true)
      message.channel.send(embed)
    })
  })
  
}

module.exports.help = {
  name:"lol"
}
