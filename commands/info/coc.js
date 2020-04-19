const clashApi = require('clash-of-clans-api');
let client = clashApi({
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImE0ZGFmMjc0LTRlZWMtNDkwMC04NGFlLTEwYmE0N2VjMmRhYSIsImlhdCI6MTU4NzI4NTY2OCwic3ViIjoiZGV2ZWxvcGVyL2I2OWMyMWVkLTM2ZDQtZDg0Mi1kMDMxLTc5MjNlZDI1Njc2YSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjMuMjIwLjE2OS4xNTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.WanAmI2ToRO2OurByvR4uJUyyvJLfxJeBX3PM52p3d1ckc9KlVd1Y4KKR7LhRogRxxjCNT-AGgMaekvo5UrJvg" 
});




module.exports = {
  name: "coc",
  category: "info",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message) => {
    message.channel.send(`**Pong** ${client.ws.ping}`);
  }
  
}