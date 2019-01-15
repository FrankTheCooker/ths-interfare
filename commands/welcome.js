exports.run = (client, message, args, func) => {
	let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

	message.delete();
	message.channel.send(`Welcome ${member} to ${message.guild.name}. Please read <#489498786402533388> & latest <#489498856166522882> carefully.`)
}
