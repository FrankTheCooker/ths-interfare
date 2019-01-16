const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
  let member = message.mentions.users.first || message.guild.member(args[0]);
  message.channel.send(`\`${member.tag}\`'s avatar is: ` + member.displayAvatarURL)
}
