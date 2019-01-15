const Discord = require('discord.js');
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args, func) => {
  if (!message.member.roles.some(r => ["eval", "Secret", "+"].includes(r.name))) return message.channel.send("Sorry, you don't have permissions to use this!");
  let timestamp = Date.now();
  let entry = args.join(' ');

  // Form Embed
  const embed = new Discord.RichEmbed()
    .setColor(0x0078D7)

  // Verify Permission
  if (!message.member.roles.some(r => ["eval", "Secret", "+"].includes(r.name))) { // umm? excuse me?

    // Configure Embed
    embed.setFooter('You do not have permission to perform this action.');

    // Return & Send Embed
    return message.channel.send(embed);

  }

  // Verify Input
  if (!entry) { // This will run if no text is given

    // Configure Embed
    embed.setFooter(`Please input text following the command.`);

    // Return & Send Embed
    return message.channel.send(embed);

  }

  // Push To Database
  await db.push('changelog', {
    entry: entry,
    timestamp: timestamp
  });

  // Configure Embed
  embed.setFooter('Creating new changelog entry.');

  // Send Embed
  message.channel.send(embed);
}
