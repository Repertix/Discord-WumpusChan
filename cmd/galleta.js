const Discord = require('discord.js')
module.exports.run = async (client, message, args, numero, prefix) => {
  const user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
  if(user != message.author){message.channel.send(`**${message.author}** le regala una galleta a **${user.username}** ๐ช (โยดฯ๏ฝโ)!`)}
  else if(user == message.author || !user)
    {message.channel.send(`**${message.author}** ha recibido una galleta de mi Wumpus Chan! ๐ช nwn`)}
  
}

module.exports.help = {
  name:"galleta"
}
