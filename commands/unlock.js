const Discord = require('discord.js');
const db = require("quick.db");

exports.run = (client, message, args, func) => {
  if (!message.member.roles.some(r => ["eval", "Secret", "+"].includes(r.name))) return message.channel.send("Nice try. You can't unlock the bot.")
  	.then(msg => msg.delete({
		timeout: 10000
	}));
const i = db.set(`prefix_${message.guild.id}`, "ths!")
		message.channel.send(`Unlocked bot. Prefix is now \`${i}\``);
  client.user.setStatus('online')
  client.user.setActivity('for ths!help', {type: 'WATCHING'});
  client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} has **unlocked** the bot.`)
  client.guilds.get("479268202866540564").channels.get("528939321097715722").send('```diff\n+ Hey guys, just a heads up, the bot is unlocked!```')
}
