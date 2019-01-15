const Discord = require('discord.js');
const db = require("quick.db");

exports.run = (client, message, args, func) => {
  if (!message.member.roles.some(r => ["eval", "Secret"].includes(r.name))) return message.channel.send("Nice try. You can't lock the bot.")
	.then(msg => msg.delete({
		timeout: 10000
	}));
const i = db.set(`prefix_${message.guild.id}`, "exec!")
		message.channel.send(`Locked bot. Prefix is now \`${i}\``);
  client.user.setStatus('dnd')
  client.user.setActivity('Bot Locked.')
  client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} has **locked** the bot.`)
  client.guilds.get("479268202866540564").channels.get("528939321097715722").send('```diff\n- Be alarmed! The bot is locked down!```')
}
