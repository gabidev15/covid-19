const discord = require("discord.js")
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

module.exports = {
  name: "corona",
  category: "info",
  description: "Get the stats of corona",
  usage: "corona all or corona <country>",
  aliases: ["covid", "covid19"],
  run: async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please give the name of country")
    }
    
    if(args.join(" ") === "all") {
      let corona = await track.all() //it will give global cases
      
      let embed = new discord.MessageEmbed()
      .setTitle("Global Cases")
      .setColor("#ff2050")
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("")
      
      
      
    }
    
    
  }
}