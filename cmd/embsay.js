const Discord = require('discord.js')
module.exports.run = async (client, message, args, numero, prefix) => {
  const sub = args.slice(0).join(' ')
  if(!sub) return message.channel.send('Say something to say')
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${sub}`)
  message.channel.bulkDelete(1)
  message.channel.send(embed)
}

module.exports.help = {
  name:"embsay"
}
