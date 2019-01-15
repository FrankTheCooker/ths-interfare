const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!message.member.roles.has("name", "+"))
      return message.channel.send("Sorry, you don't have permissions to use this!");
  let role = message.guild.roles.find(r => r.name === "+");
  let role2 = message.guild.roles.find(r => r.name === "Server Moderator");
  let role3 = message.guild.roles.find(r => r.name === "=== MR Section ===");

  if (!role) return;
  member.addRole(role2).catch(console.error);
  member.addRole(role3).catch(console.error);
  client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **mod**`)
}
