const Discord = require("discord.js");
const client = new Discord.Client();


client.on("message", message => {
  if (message.content === "Ily") {
    message.reply("Ily too");
  }
});
client.on("message", message => {
  if (message.content === "gay") {
    message.reply("same doe");
  }
});

client.login("NzI2Mjg4NTE4MjE2ODEwNTE2.XvbHFQ.XvzGskQXW0TFeM4WcmzzMSv5LNU");