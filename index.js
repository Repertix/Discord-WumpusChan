const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const db = require('quick.db')//Esto ya no lo usó xD
const config = require("./config.json")
const rp = require("./roleplay.json")
client.commands = new Discord.Collection();
client.on('ready', () =>{
  client.user.setPresence({ activity: { name: 'w/ayuda | '+client.guilds.cache.size+' servidores | Versión 1.21 🏠♥ | @wumpuschan' }, status: 'idle' })
 
})

//Command handler
fs.readdir("./cmd", (err, file) => { 
    if(err) console.log(err) 
    let jsfile = file.filter(f=>f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0){
      console.log("Comando no disponible!")
      return;
    }
    jsfile.forEach((f, i) => {
      let props = require(`./cmd/${f}`)
      console.log(`${f} cargado`)
      client.commands.set(props.help.name, props);
      });
  })

//Message event
client.on('message', async(message) =>{
  
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  const prefix = "w/"
  
  if (!message.content.startsWith(prefix)) return; 

  //Importador de comandos de Roleplay
  async function logOn(autor, mencionado, accion, tipo){
    let dbFrases;
    switch(tipo){
      case "frases2":{dbFrases = rp.roleplay[accion].frases2; break}

      default:{dbFrases = rp.roleplay[accion].frases}
    }
    let dbGifs = rp.roleplay[accion].gifs
    
    let gif = dbGifs[Math.floor((Math.random() * dbGifs.length))]
    let frase = dbFrases[Math.floor((Math.random() * dbFrases.length))]
    
    let prepre = frase.replace("{author}", autor)
    let pre;
    if(mencionado == "none"){pre = prepre} else {pre = prepre.replace("{mention}", mencionado)}
    
    let embed = new Discord.MessageEmbed()
    .setDescription(pre)
    .setImage(gif)
    .setColor("RANDOM")
    message.channel.send(embed)
    
  }
  let messageArray = message.content.split(" ");
  let command = messageArray[0]; 
  let args = messageArray.slice(1);
  let commandfile = client.commands.get(command.slice(prefix.length))
  if(commandfile) commandfile.run(client, message, args, prefix, logOn);//Carga el mensaje
})

client.login(config.token)//Hace loguear al bot, el TOKEN ya no sirve, ni lo intenten...