const { NovelCovid } = require('novelcovid');
 const Discord = require("discord.js");
const track = new NovelCovid();


module.exports = {
  name: "corona",
  category: "info",
  description: "Get the corona senpai details",
  usage: "corona",
  run: async (client, message, args) => {
    
    
 if(!args.length === "all") {
   let corona = await track.all()
   
   let embed = new Discord.MessageEmbed()
   .setTitle("Global Cases")
   .setColor("#ff2050")
   .addField(corona)
   
 }
    
    
    
    
    
  }
  
}