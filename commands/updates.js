const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
    let role = message.guild.roles.find(r => r.name === "Updates");
	message.member.addRole(role.id);
  	message.channel.send('✅ You are now subscribed to updates.') // Refresh whenever you want, I got hangman a bit fixed up.
  }
