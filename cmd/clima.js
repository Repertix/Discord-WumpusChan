const Discord = require('discord.js')
const weather = require('weather-js')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  let ubi = args.join(" ")
  weather.find({search: ubi, degreeType: 'C'}, function (err, result){
    if(!ubi) return message.channel.send('❌ | Di un lugar que quieras ver su clima')
    
    if(err) return message.channel.send("❌ | Algo salio mal. Intenta otra vez!")
    let u = result[0].current
    let l = result[0].location
    const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(`⛅ La condición climatica es: **${u.observationpoint}**`)
    .setDescription(`${u.skytext}`)
    .setThumbnail(u.imageURL)
    .addField('⌚ Zona Horaria', `${l.timezone}`, true)
    .addField('📈 Tipo de Grados', `${l.degreetype}`, true)
    .addField('🌡 Temperatura', `${u.temperature}°`, true)
    .addField('☀ Se siente como...', `${u.temperature}°`, true)
    .addField('🌫 Vientos', u.winddisplay, true)
    .addField('💧 Humedad', `${u.humidity}%`, true)
    message.channel.send(embed)
  })
}

module.exports.help = {
  name:"clima"
}
