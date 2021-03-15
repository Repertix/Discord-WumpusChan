const Discord = require('discord.js')
const Canvas = require('canvas')
module.exports.run = async (client, message, args, numero, prefix, logOn) => {
  let ask = args.join(' ')
  if(!ask) return message.channel.send("❌ | Escribe algo para incluirlo en el diálogo")
  if(ask.length > 96) return message.channel.send("❌ | El diálogo no debe pasar de los 96 caracteres")
  let o = ask.replace(/(.{33})/g,"$1\n")
  Canvas.registerFont("/home/runner/WumpusChan-Repo/fonts/comicSans.ttf", {family:"comicSans"})
  const canvas = Canvas.createCanvas(578, 152);

	const ctx = canvas.getContext('2d');

  //Tarjeta
  const bg = await Canvas.loadImage("https://cdn.discordapp.com/attachments/743312947098681485/745364577444692078/undertale_text_box.png")
  ctx.drawImage(bg,0,0,canvas.width,canvas.height)

  ctx.font = "25px comicSans"
  ctx.fillStyle = "#fff"
  ctx.fillText(o, 160, 50)
 
  const att = new Discord.MessageAttachment(canvas.toBuffer(), "getdunkedon.png")
  message.channel.send(att)
}

module.exports.help = {
  name:"sans"
}
