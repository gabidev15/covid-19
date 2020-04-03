const { token, prefix } = require("./config.json")

const discord = require("discord.js") //Gonna use Discord.js Module xD
const client = new discord.Client();

client.on("ready", () => { //When bot is ready
  console.log("I am Reday to Go")
  client.user.setActivity("I am Devil") //It will set status :)
})

client.on("message", message => {
 if(message.content === `${prefix}ping`) {
   return message.channel.send(`Pong ${client.ws.ping}`)
 }
})

client.login(token)