const Discord = require('discord.js')
const mal = require('mal-scraper')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  const anime = args.slice(0).join(' ')
  if(!anime) return message.channel.send('❌ | Introduce el nombre del anime')
   mal.getInfoFromName(anime).then((data) =>{
     
     const embed = new Discord.MessageEmbed()
     .setColor(config.color)
     .setAuthor(`Resultado de: ${anime}`)
     .setTitle(data.englishTitle)
     .addField('Titulo en japones', data.japaneseTitle, true)
     .addField('Episodios', data.episodes, true)
     .addField('Tipo', data.type, true)
     .addField('Valoración', data.score, true)
     .addField('Genero', data.genres, true)
     .setThumbnail(data.picture)
     .addField('Rating', data.rating, true)
     .addField('Trailer', `[Trailer](${data.trailer})`, true)
     .addField('Emitiendo', data.aired, true)
     .addField('Popularidad', data.popularity, true)
     .addField('Rango', data.ranked, true)
     .addField('Mas sobre el anime', `[Aquí](${data.url})`, true)
     message.channel.send(embed)
   })
  
}

module.exports.help = {
  name:"anime"
}
