const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
  if (!message.member.roles.some(r => ["+Announcer Permissions"].includes(r.name))) return;
  const embed = new Discord.RichEmbed()
  .setColor(0x7289DA)
  .setTitle("Feeds for THS Interfare")
  .addField("updates", `**Role: <@&513775638805741568>**\n**Channel: <#489498856166522882>**`, true)
  .addField("staff", `**Role: <@&517409402446151680>**\n**Channel: <#517408740123738113>**`, true)
  .addField("huge", `**Role: @everyone**\n**Channel: <#489498856166522882>**`, true)
  .addField("non-ping", `**Role: <@&501073385984622592>**\n**Channel: <#489498856166522882>**`, true)
  .addField("ping", `**Role: <@&489504532200554513>**\n**Channel: <#489498856166522882>**`, true)
  
  message.channel.send(embed)
}
