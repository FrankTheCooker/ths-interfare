const Discord = require('discord.js');

exports.run = async (client, message, args, func) => {
	let target = message.mentions.users.first() || message.guild.member(args[0]);
        message.channel.send(`\`${target.user.tag}\`'s avatar is: ` + target.displayAvatarURL);
}
