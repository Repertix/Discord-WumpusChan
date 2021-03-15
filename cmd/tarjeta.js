const Discord = require('discord.js')
const Canvas = require('canvas')
module.exports.run = async (client, message, args, numero, prefix, logOn) => {
  let ask = args.join(' ')
  if(!ask) return message.channel.send("❌ | Añade una descripción a tu tarjeta")
  if(ask.length > 160) return message.channel.send("❌ | La descripción de tu tarjeta no debe de pasarse de 160 caracteres")
  let o = ask.replace(/(.{40})/g,"$1\n")
  Canvas.registerFont("/home/runner/WumpusChan-Repo/fonts/times.ttf", {family:"times"})
  Canvas.registerFont("/home/runner/WumpusChan-Repo/fonts/timesbi.ttf", {family:"timesbi"})
  const canvas = Canvas.createCanvas(419, 610);

	const ctx = canvas.getContext('2d');

  //Tarjeta
  const bg = await Canvas.loadImage("https://cdn.discordapp.com/attachments/743312947098681485/745099786054795364/createcard.jpg")
  ctx.drawImage(bg,0,0,canvas.width,canvas.height)
  //Nombre
  ctx.font = '30px times';
	ctx.fillStyle = '#000000';
	ctx.fillText(message.author.username, 40, 60);

  //Descripción
  ctx.font = "17px timesbi";
  ctx.fillStyle = "#000000";
  ctx.fillText(o, 40, 490)
  //Avatar
  const avatar = await Canvas.loadImage(message.author.displayAvatarURL({format:'jpg'}))
  ctx.drawImage(avatar, 50, 109, 320, 320)


  


  const att = new Discord.MessageAttachment(canvas.toBuffer(), "yugioh.png")
  message.channel.send(att)
}

module.exports.help = {
  name:"tarjeta"
}
