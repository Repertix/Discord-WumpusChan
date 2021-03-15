const Discord = require('discord.js')
const Canvas = require('canvas')
module.exports.run = async (client, message, args, numero, prefix, logOn) => {
  let ask = args.join(' ')
  if(!ask) return message.channel.send("❌ | Añade un texto")
  if(ask.length > 144) return message.channel.send("❌ | El texto no debe pasar de los 144 caracteres")
  let o = ask.replace(/(.{24})/g,"$1\n")
  Canvas.registerFont("/home/runner/WumpusChan-Repo/fonts/russo.ttf", {family:"russo"})
  const canvas = Canvas.createCanvas(1364, 768);

	const ctx = canvas.getContext('2d');

  //Tarjeta
  const bg = await Canvas.loadImage("https://cdn.discordapp.com/attachments/743312947098681485/745397649640783943/854db5fa-662a-4880-bc3d-b930bcd1172c2Fsonicsays.png")
  ctx.drawImage(bg,0,0,canvas.width,canvas.height)
  //Nombre
  ctx.font = '40px russo';
	ctx.fillStyle = '#fff';
  ctx.strokeStyle = "#000000"
  ctx.fillText(o, 270, 230);
	ctx.strokeText(o, 270, 230);
  

  


  const att = new Discord.MessageAttachment(canvas.toBuffer(), "sonic.png")
  message.channel.send(att)
}

module.exports.help = {
  name:"sonic"
}
