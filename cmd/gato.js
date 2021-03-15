const Discord = require('discord.js')
const got = require('superagent')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  let {body} = await got
  .get('https://nekos.life/api/v2/img/meow')
  const embah = new Discord.MessageEmbed()
  .setTitle('Miau OwO!')
  .setColor(config.color)
  .setImage(body.url)
  message.channel.send(embah)
}

module.exports.help = {
  name:"gato"
}
