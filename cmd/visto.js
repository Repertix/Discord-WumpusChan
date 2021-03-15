const Discord = require('discord.js')
const superagent = require("superagent")
module.exports.run = async (client, message, args, numero, prefix) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("bruh")
  .setImage("https://repl.it/@repertix/WumpusChan-Repo#assets/slimeTells.png")
  message.channel.send(embed)
}

module.exports.help = {
  name:"test"
}
