const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
  let mentionrole = message.guild.roles.find(r => r.name === "Dyno Verification");
  
  client.guilds.get("479268202866540564").channels.get("498163437562495006").send(`Hey ${message.author}, you have requested verify!`)
	client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`Hey, ${mentionrole}! ${message.author} has requested verify!`)
}
