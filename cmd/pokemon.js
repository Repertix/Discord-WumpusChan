const Discord = require('discord.js')
const Pokedex = require("pokedex")
const config = require("../config.json")
const pokedex = new Pokedex()
module.exports.run = async (client, message, args, numero, prefix) => {
  let pkmn = args.join(' ').toLowerCase()
  if(!pkmn) return message.channel.send("❌ | Incluye el nombre del pokémon que deseas buscar")
  let p = pokedex.pokemon(pkmn)
   let pp = p
    if(!p.id) return message.channel.send("❌ | Trata de no usar numeros y espacios.")
    const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .addField("🔰 Pokémon", pkmn, true)
    .addField("🆔 Id", pp.id, true)
    .addField("↔ Ancho", pp.weight, true)
    .addField("↕ Alto", pp.height, true)
    .addField("🔢 Orden", pp.order, true)
    .addField("✨ Experiencia Base", pp.base_experience, true)
    
    .setThumbnail(pp.sprites.animated)
    message.channel.send(embed)
  
}

module.exports.help = {
  name:"pokemon"
}
