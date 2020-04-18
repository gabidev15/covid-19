const { NovelCovid } = require('novelcovid');
 const Discord = require("discord.js");
const track = new NovelCovid();


module.exports = {
  name: "corona",
  category: "info",
  description: "Get the corona senpai details",
  usage: "corona",
  run: async (client, message, args) => {
    
    
 if(args.join(" ") === "all") {     
   let corona = await track.all()
   
   let embed = new Discord.MessageEmbed()
   .setTitle("Global Cases")
   .setColor("#ff2050")
   .addField("Total Cases", corona.cases, true)
   .addField("Todays Cases", corona.todayCases, true)
   .addField("Total Deaths", corona.deaths, true)
   .addField("Today Deaths", corona.todayDeaths, true)
   .addField("Total Recovered", corona.recovered, true)
   .addField("Active Cases", corona.active, true)
   
   return message.channel.send(embed)
   
 }
    
    
    
    
    
    
  }
  
}