const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
    let role = message.guild.roles.find(r => r.name === "Updates");
	  message.member.removeRole(role.id);
  	message.channel.send('✅ You are now unsubscribed to updates.')
}
