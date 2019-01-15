const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args, func) => {
    if (!message.member.roles.some(r => ["eval", "Secret", "Staff"].includes(r.name))) return;
  let reminderTime = args[0];
    if (!reminderTime) return message.channel.send("**Specify a time for me to remind you. Usage: ths!remind <time> <reminder>**");

    let reminder = args.slice(1).join(" ");

    let remindEmbed = new Discord.RichEmbed()
        .setColor('#ffffff')
        .setAuthor(`Reminder | ${message.author.tag}`, message.author.displayAvatarURL)
        .addField("Reminder", `\`\`\`${reminder}\`\`\``)
        .addField("Time", `\`\`\`${reminderTime}\`\`\``)
        .setTimestamp()

    message.channel.send(remindEmbed);

    setTimeout(function() {
        let remindEmbed = new Discord.RichEmbed()
            .setColor('#ffffff')
            .setAuthor(`Reminder | ${message.author.tag}`, message.author.displayAvatarURL)
            .addField("Reminder", `\`\`\`${reminder}\`\`\``)
            .setTimestamp()
        
        client.guilds.get("479268202866540564").channels.get("533017761136508959").send(`<@${message.author.id}>`);
        client.guilds.get("479268202866540564").channels.get("533017761136508959").send(remindEmbed);
    }, ms(reminderTime));
}
