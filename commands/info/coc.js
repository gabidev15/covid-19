const clashApi = require('clash-of-clans-api');
const { MessageEmbed } = require("discord.js")
let clienx = clashApi({
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjhmZjVmMTEwLTdkYjktNGZkNC1iYmIyLTUxYTk5ZDk4M2E5NiIsImlhdCI6MTU4NzI4NjMzNiwic3ViIjoiZGV2ZWxvcGVyL2I2OWMyMWVkLTM2ZDQtZDg0Mi1kMDMxLTc5MjNlZDI1Njc2YSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE1Ny40My4xMDUuODYiLCIzLjIyMC4xNjkuMTU2Il0sInR5cGUiOiJjbGllbnQifV19.DGmhhvFQzHExUokk7vsEHVVC34LayjtH1Ap7DLfmDZB6jqt8hcRXMMf0nLRlXHVdmfUL8xzrzkTlQ8Mo6a93aQ"});



module.exports = {
  name: "coc",
  category: "info",
  description: "Get bot ping :/",
  usage: "ping",
  run: async (client, message, args) => {
  //  message.channel.send(`Done`);
    
    if(!args.length) {
      return message.channel.send("Please provide Clan Tag")
      
    }
 clienx
  .clanByTag(args.join(" "))
  .then(response => {
let embed = new MessageEmbed()
.setTitle(response.name)
.setThumbnail(response.badgeUrls.large)
.setDescription(response.description)
.addField("Clan Level", response.clanLevel)
.setColor("#ff2050")

message.channel.send(embed)
   
 })
 
  .catch(err => console.log(err));
  }
  
}