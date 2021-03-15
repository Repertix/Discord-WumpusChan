const Discord = require('discord.js')
const Canvas = require('canvas')
module.exports.run = async (client, message, args, numero, prefix) => {
  let user = message.mentions.users.map(o => o)
  if(!user[0]) return message.channel.send("❌ | Menciona a 2 personas")
  if(!user[1]) return message.channel.send("❌ | Te falto a uno mas")
  const canvas = Canvas.createCanvas(916, 610);
  const ctx = canvas.getContext('2d');
  const bg = await Canvas.loadImage("https://cdn.discordapp.com/attachments/743312947098681485/743328311744397322/amigosEspeciales.png");

  ctx.drawImage(bg,0,0,canvas.width,canvas.height);
  const av = await Canvas.loadImage(user[0].displayAvatarURL({format:'jpg'}))
  ctx.drawImage(av, 130, 200, 120, 120)
  const a = await Canvas.loadImage(user[1].displayAvatarURL({format:'jpg'}))
  ctx.drawImage(a, 330, 200, 120, 120)
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'ThisIsAImage.png');
  message.channel.send("**"+message.author.username+`** cree que **${user[0].username}** y **${user[1].username}** son amigos especiales!`, attachment);
}

module.exports.help = {
  name:"especiales"
}