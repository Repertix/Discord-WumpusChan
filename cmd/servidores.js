const Discord = require('discord.js')
module.exports.run = async (client, message, args, numero, prefix) => {
  if(message.author.id !== '307596569279070228') return message.channel.send('Comando exclusivo para el desarrollador')
  const embed = new Discord.MessageEmbed()
  .setTitle('Servidores....')
  .setColor(0x36393E)
  .setDescription(client.guilds.map(r=> `\n${r}\n`))
  client.users.get('307596569279070228').send(embed)
  
  const anobed = new Discord.MessageEmbed()
  .setTitle('Sent')
  .setColor(0x36393E)
  message.channel.send(anobed)
  
}

module.exports.help = {
  name:"servidores"
}
