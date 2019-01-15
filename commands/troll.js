const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
  if (!message.member.roles.some(r => ["+"].includes(r.name)))
      return message.channel.send("Sorry, you don't have permissions to use this!");
  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let role = message.guild.roles.find('id', '503888080906878977');
  
  member.removeRoles(member.roles).catch(console.error);
  member.addRole(role.id).catch(console.error);
  client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **troll**`)
}
