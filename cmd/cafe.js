const Discord = require('discord.js')
const superagent = require("superagent")
module.exports.run = async (client, message, args, numero, prefix) => {
  
  message.channel.send("Te haces un café.☕").then(m =>{
    setTimeout(function (){m.edit("Tomas un sorbo. Sabe muy bien!☕")},5000)
    setTimeout(function (){m.edit("Tomas un sorbo mas largo. ☕")},10000)
    setTimeout(function (){m.edit("Te paras a reflexionar sobre la vida")},15000)
    setTimeout(function (){m.edit("Sigues tomando tu café.... ☕")},20000)
    setTimeout(function (){m.edit("Te sientes mucho mejor")},25000)
    setTimeout(function (){m.edit("Te has terminado de tomar tu café")},30000)
  })
}

module.exports.help = {
  name:"cafe"
}
