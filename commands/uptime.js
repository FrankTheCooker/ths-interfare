const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
   let days = Math.floor(client.uptime / 86400000);
   let hours = Math.floor(client.uptime / 3600000) % 24;
   let minutes = Math.floor(client.uptime / 60000) % 60;
   let seconds = Math.floor(client.uptime / 1000) % 60;
    
    const embed = new Discord.RichEmbed()
    .setTitle("Uptime since last restart")
    .setColor(0x0078D7)
    .setDescription(`\n${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`)
    
    message.channel.send(embed);
}
