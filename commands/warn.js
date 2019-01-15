const Discord = require('discord.js');

exports.run = async (client, message, args, func) => {
  if (!message.member.roles.some(r => ["Chairman", "Vice Chairman", "Server Moderator"].includes(r.name)))
      return message.channel.send("Sorry, you don't have permissions to use this!");
  const {caseNumber} = require('../util/caseNumber.js');
  let user = message.mentions.users.first() || message.guild.members.get(args[0]);
  const modlog = client.channels.find('id', '500783942903922698');
  const caseNum = await caseNumber(client, modlog);
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone or specify an id.*').catch(console.error);
  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use ths!reason ${caseNum} <reason>.`;
  const embed = new Discord.RichEmbed()
  .setTimestamp()
  .setAuthor(`Case ${caseNum} | Warn | ${user.username}#${user.discriminator}`, user.displayAvatarURL)
  .setDescription(`**User:** ${user}\n**Moderator:** ${message.author}\n**Reason:** ${reason}`)
  .setFooter(`Case ${caseNum}`)
  return client.channels.get(modlog.id).send(embed);
  client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **warn**`);
}
