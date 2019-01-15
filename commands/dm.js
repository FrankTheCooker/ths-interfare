const Discord = require('discord.js');

exports.run = async (client, message, args, func) => {
  //let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	//let dm = args.slice(1).join(' ');

	//member.send(`${message.guild.name}:\n${dm}`)

	//if (!dm) return;
  //client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **dm**`)
	message.reply("This command is currently disabled until further notice!")
}
