const Discord = require('discord.js')
const config = require("../config.json")
const superagent = require('superagent')
module.exports.run = async (client, message, args, numero, prefix) => {
  const rblx = args.join(' ')
  if(!rblx) return message.channel.send("❌ | Incluye el nombre del jugador que quieras buscar")
  const embed = new Discord.MessageEmbed()
  .setColor(config.color)
  superagent.get(`http://api.roblox.com/users/get-by-username?username=${rblx}`).end((err,res) =>{
    let user = res.body
    let on;
    if(user.IsOnline === true){on = "Si"} else {on = "No"}
    
    
    embed.setTitle(user.Username)
    embed.addField("🆔 Id", user.Id, true)
    embed.addField("📡 En Linea", on,true)
    embed.setThumbnail(`http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=${user.Username}`)
    superagent.get(`https://badges.roblox.com/v1/users/${user.Id}/badges?sortOrder=Asc&limit=10`).end((err,res) =>{
      superagent.get(`https://groups.roblox.com/v2/users/${user.Id}/groups/roles`).end((err,res) =>{
        superagent.get(`https://friends.roblox.com/v1/users/${user.Id}/friends/count`).end((err,res) =>{
          embed.addField("😀 Amigos", res.body.count, true)
          message.channel.send(embed)
        })
      })
    })
  })
}

module.exports.help = {
  name:"roblox"
}
