const Discord = require('discord.js')
const Canvas = require('canvas')
const hm = require("../halloweenRecib.json")
module.exports.run = async (client, message, args, numero, prefix, logOn) => {
 let resMalo = hm.resultadosMalos[Math.floor((Math.random() * hm.resultadosMalos.length))]
 let c = 0;
 let res = hm.resultados[Math.floor((Math.random() * hm.resultados.length))]
 let foto = hm.chicas[Math.floor((Math.random() * hm.chicas.length))]
  const canvas = Canvas.createCanvas(1000, 1000);

	const ctx = canvas.getContext('2d');

  //Tarjeta
  const bg = await Canvas.loadImage("https://cdn.discordapp.com/attachments/743312947098681485/761246734344519730/RobloxScreenShot20201001_101751849.png")
  ctx.drawImage(bg,0,0,canvas.width,canvas.height)
const chic = await Canvas.loadImage(foto)

ctx.drawImage(chic,50,200,800,800)

 
  const att = new Discord.MessageAttachment(canvas.toBuffer(), "felizhalloween.png")
  let filter = m => m.author.id == message.author.id
  message.channel.send(att)
  message.channel.send("🦇 Dulce o truco! **Hay una chica en la puerta, que haras?** Di `dulce` si quieres darle dulces. O solo espera a que se vaya...")
  const collector = new Discord.MessageCollector(message.channel, m => m.author.id == message.author.id, {max:1, time:60000})
collector.on('collect', message => {
  let me = message.content.toLowerCase()
            if (me == "dulce") {
                message.channel.send("Resultado: **"+res+"**");
            } 
        })

collector.on('end', m =>{
  if(m.size < 1){message.channel.send("Resultado: **"+resMalo+"**");}
})
}

module.exports.help = {
  name:"halloween"
}
