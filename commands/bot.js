const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!message.member.roles.some(r => ["+"].includes(r.name)))
      return message.channel.send("Sorry, you don't have permissions to use this!");
  let role = message.guild.roles.find(r => r.name === "BOTS");
  
  member.addRole(role).catch(console.error);
  client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **bot**`)
}
