const Discord = require('discord.js')
const got = require('got')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  got('https://random.dog/woof.json').then(res=>{
    const embed = new Discord.MessageEmbed()
    .setTitle('Guau OwO!')
    .setImage(JSON.parse(res.body).url)
    .setColor(config.color)
    message.channel.send(embed)
  })
}

module.exports.help = {
  name:"perro"
}
