const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
  if (!message.member.roles.some(r => ["+"].includes(r.name)))
      return message.channel.send('You can\'t change that.')
    client.guilds.get("479268202866540564").channels.get("528939321097715722").send('Changed bot status to **Non-Operative**.')
    message.channel.send('Good, I have changed it to `non-operative`.')
    client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} has put the bot to **Non-Operative**.`)
}
