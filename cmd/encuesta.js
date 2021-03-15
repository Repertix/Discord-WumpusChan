const Discord = require('discord.js')

module.exports.run = async (client, message, args, numero, prefix) => {
  let text = args.slice(0).join(' ')
  let t = text.split(', ')
  if(!t[0]) return message.channel.send('Pregunta algo')
  if(!t[1]) return message.channel.send('❌ | Pon dos respuestas. Separalas con ", "')
  if(!t[2])return message.channel.send('❌ | Una mas. Puedes poner hasta 4')
  let f=``;
  let f5 = ``;
  if(t[3]){
    f = `:three: **${t[3]}**`}
  if(t[4]){
    f5 = `:four: **${t[4]}**`
  }
    const embed = new Discord.MessageEmbed()
    .setTitle(t[0]+`\n---------------\n`)
    .setDescription(`:one: **${t[1]}**\n:two:**${t[2]}**\n${f}\n${f5}`)
    .setColor(0x36393E)
    .setFooter('Pregunta hecha por '+message.author.username)
    message.channel.send(embed).then(m => {
      let o;
       m.react('1\u20e3')
       
      
      if(t[3]){
       m.react('3\u20e3')
      }
      m.react('2\u20e3')
      if(t[4]){
        m.react('4\u20e3')
      }
     
     
      
      
      
    })
    
     
}
module.exports.help = {
  name:"encuesta"
}
