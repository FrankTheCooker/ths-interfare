const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!message.member.roles.has("name", "+"))
      return message.channel.send("Sorry, you don't have permissions to use this!");
  let role = message.guild.roles.find(r => r.name === "+");
  let role2 = message.guild.roles.find(r => r.name === "Server Moderator");
  let role3 = message.guild.roles.find(r => r.name === "=== MR Section ===");
  let role4 = message.guild.roles.find(r => r.name === "Being trained");
  let role5 = message.guild.roles.find(r => r.name === "In Training");
  let role6 = message.guild.roles.find(r => r.name === "Moderator In Training");

  if (!role) return;
  member.addRole(role2).catch(console.error);
  member.addRole(role3).catch(console.error);
  member.removeRole(role4).catch(console.error);
  member.removeRole(role5).catch(console.error);
  member.removeRole(role6).catch(console.error);
  message.channel.send("The mentioned Moderator In Training has now been advanced to Server Moderator.");
  client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **trained**`)
}
