const Discord = require('discord.js')
const Canvas = require('canvas')
module.exports.run = async (client, message, args, numero, prefix, logOn) => {
  
  const canvas = Canvas.createCanvas(1000, 1000);

	const ctx = canvas.getContext('2d');

  //Tarjeta
  const bg = await Canvas.loadImage(message.guild.iconURL({format:'jpg'}))
  ctx.drawImage(bg,0,0,canvas.width,canvas.height)

 
  const att = new Discord.MessageAttachment(canvas.toBuffer(), "getdunkedon.png")
  message.channel.send(att)
}

module.exports.help = {
  name:"iconoSv"
}
