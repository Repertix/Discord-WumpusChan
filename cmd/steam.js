const Discord = require('discord.js')
const steam = require('steam-game-browser')
const moment = require('moment')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  let game = args.slice(0).join(' ')
  if(!game) return message.channel.send('🎮 | Di el nombre del juego que quieras buscar')
  steam.searchByName(`${game}`, (err, data) => {
    if(err) return message.channel.send('❌ | Lo siento, no encontre el juego que buscabas.')
    let gratis = '';
    if(data.is_free === true){
      gratis = 'Gratis'
    }else if(data.is_free === false){
      gratis = `${data.price_overview.final_formatted} ${data.price_overview.currency}`
    }
    const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(`${data.name}`)
    .setDescription(data.short_description)
    .addField('🌎 Idiomas Disponibles', data.supported_languages, true)
    .addField('👪 Edad Requerida', data.required_age, true)
    .addField('🆔 ID De la APP', data.steam_appid, true)
    .addField('🌐 Sitio Web',`[Here](${data.website})`, true)
    .addField('🔧 Desarrolladores', data.developers, true)
    .addField('📨 Publicado por', data.publishers, true)
    .addField('🏷 Precios', gratis, true)
    .addField('📆 Fecha de publicación', data.release_date.date, true)
    .setThumbnail(data.header_image)
    
    message.channel.send(embed)
  })
}
                                              

module.exports.help = {
  name:"steam"
}
