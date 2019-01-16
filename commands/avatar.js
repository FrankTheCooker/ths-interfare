const Discord = require('discord.js');
const sm = require('string-similarity');

exports.run = (client, message, args, func) => {
  let member = args[0] || message.mentions.users.first || message.author
  message.channel.send(`\`${member.tag}\`'s avatar is: ${member.user.displayAvatarURL}`)
}
