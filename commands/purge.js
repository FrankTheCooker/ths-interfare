const Discord = require("discord.js");

exports.run = async (client, message, args, func) => {
  const user = message.mentions.users.first() || message.guild.member(args[0]);
	if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('no perms kappa')
		.then(msg => msg.delete({
			timeout: 10000
		}));
	const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
	if (!amount) return message.channel.send('Specify an amount of messages to delete or purge!')
		.then(msg => msg.delete({
			timeout: 10000
		}));
	if (!amount && !user) return message.channel.send('Specify a user and amount, or just an amount, of messages to delete or purge!')
		.then(msg => msg.delete({
			timeout: 10000
		}));
	message.channel.fetchMessages({
			limit: amount
		, })
		.then((messages) => {
    const embed3 = new Discord.RichEmbed()
    .setColor(0x117EA6)
    .setAuthor("THS Interfare", "https://cdn.discordapp.com/attachments/525711382273064991/532627136977043489/Screenshot_1.png")
    .setDescription(`**Bulk Delete in ${message.channel}, ${messages.size} messages deleted**`)
    .setTimestamp()
    client.guilds.get("479268202866540564").channels.get("500785695216893962").send(embed3);
			if (user) {
				const filterBy = user ? user.id : client.user.id;
				messages = messages.filter(m => m.author.id === filterBy)
					.array()
					.slice(0, amount);
			}
			message.channel.bulkDelete(messages)
				.catch(error => console.log(error.stack));
		});
    
  
    const embed = new Discord.RichEmbed()
    .setColor(0x117EA6)
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setDescription("Used `purge` command in " + `${message.channel}\n` + `${message.content}`)
    .setTimestamp()
    
    client.guilds.get("479268202866540564").channels.get("500785695216893962").send(embed);
  
    const embed2 = new Discord.RichEmbed()
    .setColor(0xFF470F)
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setDescription(`**Message sent by ${message.author} deleted in ${message.channel}**\n${message.content}`)
    .setFooter(`ID: ${message.author.id}`)
    .setTimestamp()
    
    client.guilds.get("479268202866540564").channels.get("500785695216893962").send(embed2);
    client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **purge**`)
}
