const Discord = require('discord.js')
const config = require("../config.json")
module.exports.run = async (client, message, args, numero, prefix) => {
  const translate = require('yandex-translate')('trnsl.1.1.20191118T235317Z.4352558beb494b5f.2dbc534cbc6d65fd9dc3c7bf1bee18842e88c573')
  const lang = args[0]
  const text = args.slice(1).join(' ')
  
  if(!lang) return message.channel.send("❌ | Incluye un lenguaje al que quieres traducir")
  if(!text) return message.channel.send("❌ | Incluye un lenguaje y un texto a usar. Recuerda utilizarlo asi: `w/traducir [Lenguaje] [Texto a traducir]`")
  translate.translate(`${text}`, {to:`${lang}`}, function(err, res){
    let rend;
    if (res.text == undefined){rend = "❌ | Lenguaje Invalido"} else {rend = res.text}
    const embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setThumbnail("http://icons.iconarchive.com/icons/marcus-roberto/google-play/512/Google-Translate-icon.png")
    .setTitle("Traductor")
    .addField("Texto original", text)
    .addField("Texto traducido [Del: "+lang+"]", rend)
    .setFooter("Revisa todos los lenguajes con sus abreviaturas: w/trLenguajes")
    message.channel.send(embed)
  })
}

module.exports.help = {
  name:"traducir"
}
