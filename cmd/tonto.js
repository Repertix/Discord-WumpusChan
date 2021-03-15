const Discord = require('discord.js')
module.exports.run = async (client, message, args, numero, prefix) => {
  let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
  let random = Math.floor(Math.random() * 100)
  if(user == client.user){random = "-1"}
    const la = new Discord.MessageEmbed()
    .setColor(process.env.color)
    .setTitle(`Yo creo que ${user.username} es:`)
    .setDescription(`**${random}%** tonto! 🤣`)
    message.channel.send(la)
  
}

module.exports.help = {
  name:"tonto"
}
