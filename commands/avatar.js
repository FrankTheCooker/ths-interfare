const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
  let member = message.mentions.users.first || args[0];
  message.channel.send(`\`${member.user.username}#${member.user.discrimator}\`'s avatar is: ${member.user.displayAvatarURL}`)
}
