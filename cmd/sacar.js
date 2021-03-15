const Discord = require('discord.js')
const Canvas = require('canvas')
module.exports.run = async (client, message, args, numero, prefix, logOn) => {
  let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
  let ress = [" fue expulsado/a", " no erá El Impostor/a", " erá El Impostor/a"]
  let resultao = ress[Math.floor((Math.random() * ress.length))]
  const canvas = Canvas.createCanvas(1366, 768);
Canvas.registerFont("/home/runner/WumpusChan-Repo/fonts/arial.ttf", {family:"Arial"})
	const ctx = canvas.getContext('2d');

  //Tarjeta
  const bg = await Canvas.loadImage("https://cdn.discordapp.com/attachments/743312947098681485/760654580756774923/eject.png")
  ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

  ctx.font = "40px Arial";
  ctx.fillStyle = "#fff";
  ctx.fillText(user.username+resultao, 384, 400);
 const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg' }));
 ctx.drawImage(avatar,625, 470, 200, 200);
  const att = new Discord.MessageAttachment(canvas.toBuffer(), "redkindasus.png")
  message.channel.send(att)
}

module.exports.help = {
  name:"expulsar"
}
