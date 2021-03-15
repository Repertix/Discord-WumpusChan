const Discord = require('discord.js')
module.exports.run = async (client, message, args, numero, prefix) => {
  message.channel.send("Miembros: "+client.users.cache.size)
  message.channel.send(client.guilds.cache.map(o => o.name).join('\n'))
}

module.exports.help = {
  name:"debugSvs"
}
