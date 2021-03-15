const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args, numero, prefix) => {
  
  message.channel.send(client.users.cache.find(o => o.tag == "❥𝑘𝑖𝑟𝑖𝑡𝑜ʕ•ᴥ•ʔ#0079").id)
}

module.exports.help = {
  name:"testo"
}
