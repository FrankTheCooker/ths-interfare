const Discord = require('discord.js');
const config = require("./config.json");

exports.run = async (client, message, args, func) => {
    if (!message.member.roles.some(r => ["Chairman", "Vice Chairman", "Server Moderator"].includes(r.name)))
      return message.channel.send("Sorry, you don't have permissions to use this!");
  async function embedSan(embed) {
  embed.message ? delete embed.message : null;
  embed.footer ? delete embed.footer.embed : null;
  embed.provider ? delete embed.provider.embed : null;
  embed.thumbnail ? delete embed.thumbnail.embed : null;
  embed.image ? delete embed.image.embed : null;
  embed.author ? delete embed.author.embed : null;
  embed.fields ? embed.fields.forEach(f => {delete f.embed;}) : null;
  return embed;
    client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **reason**`)
}

  const modlog = client.channels.find('id', '500783942903922698');
  const caseNumber = args.shift();
  const newReason = args.join(' ');
  const user = message.mentions.users.first();

  await modlog.fetchMessages({limit:100}).then((messages) => {
  const caseLog = messages.filter(m => m.author.id === client.user.id &&
      m.embeds[0] &&
      m.embeds[0].type === 'rich' &&
      m.embeds[0].footer &&
      m.embeds[0].footer.text.startsWith('Case') &&
      m.embeds[0].footer.text === `Case ${caseNumber}`
    ).first();
    modlog.fetchMessage(caseLog.id).then(logMsg => {
      const embed = logMsg.embeds[0];
      embedSan(embed);
      embed.description = embed.description.replace(`Awaiting moderator's input. Use ${config.prefix}reason ${caseNumber} <reason>.`, newReason);
      logMsg.edit({embed});
    });
  });
}
