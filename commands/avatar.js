const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
	let target = message.mentions.users.first() || message.guild.member(args[0]);
  let msg = await message.channel.send(`\`${target.user.tag}\`'s avatar is:`);

	await message.channel.send({files: [
		{
			attachment: target.displayAvatarURL,
			name: "avatar.png"
		}
	]});
}
