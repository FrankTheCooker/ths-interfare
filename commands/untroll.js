const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!message.member.roles.some(r => ["Staff"].includes(r.name)))
      return message.channel.send("Sorry, you don't have permissions to use this!");
  let role = message.guild.roles.find('id', '503888080906878977');
  let role1 = message.guild.roles.find(r => r.name === "Verified");
	let role2 = message.guild.roles.find(r => r.name === "=== LR Section ===");

  member.removeRole(role).catch(console.error);
  member.addRole(role1).catch(console.error);
  member.addRole(role2).catch(console.error);
  client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **untroll**`)
}
