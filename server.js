const { token, prefix } = require("./config.json")
const { config } = require("dotenv");
const discord = require("discord.js") //Gonna use Discord.js Module xD
const client = new discord.Client({
  disableEveryone: true
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();




["command"].forEach(handler => { //some error here
  require(`./handlers/${handler}`)(client)
})



client.on("ready", () => { //When bot is ready
  console.log("I am Reday to Go")
  client.user.setActivity("I am Devil") //It will set status :)
})

client.on("message", message => {
  
if(message.author.bot) return;
  if(!message.guild) return;
  if(!message.content.startsWith(prefix)) return;
  
 })

client.login(token)