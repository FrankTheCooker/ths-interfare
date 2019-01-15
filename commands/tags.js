const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
  if (message.member.roles.some(r => ["+"].includes(r.name))) return;
  const embed = new Discord.RichEmbed()
  .setTitle("Tags")
  .setDescription("T1, T2, T3, T4, P1, E1, E2")
  .setColor(0x0078D7)
  
  message.channel.send(embed)
}
