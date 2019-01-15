exports.run = (client, message, args, func) => {
	let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	let role = message.guild.roles.find(r => r.name === "Kidnapped Delivery person");

	member.removeRole(role).catch(console.error);
  	message.channel.send(`❌ WAIT! ${message.author}, WHY DID YOU LET THAT DELIVERY PERSON GO?!`)
}
