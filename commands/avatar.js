const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
  let member = args[0] || message.mentions.users.first || message.author;
  message.channel.send(`\`${member.user.tag}\`'s avatar is: ${member.user.displayAvatarURL}`)
}
