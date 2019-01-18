const Discord = require('discord.js');

exports.run = async (client, message, args, func) => {
	let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!member)
  return message.reply("Please mention a valid member of this server");
  if (!message.member.roles.some(r => ["Dyno Verification"].includes(r.name)))
      return message.channel.send("Sorry, you don't have permissions to use this!");
	let role = message.guild.roles.find(r => r.name === "Verified");
	let role2 = message.guild.roles.find(r => r.name === "=== LR Section ===");
	let role3 = message.guild.roles.find(r => r.name === "Unverified");

	member.addRole(role).catch(console.error);
	member.addRole(role2).catch(console.error);
	member.removeRole(role3).catch(console.error);
  message.channel.send(`<:success:523531815072301092> Changed roles for ${member.user.tag}, +${role.name}, +${role2.name}, -${role3.name}`)
  client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **verify**`)
}
