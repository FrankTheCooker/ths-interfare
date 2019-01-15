const Discord = require('discord.js');

exports.run = async (client, message, args, func) => {
    let colours = message.guild.roles.filter(role => role.name.startsWith("#"));
    if (colours.size < 1) return;
    
    let str = args.join(" ");
    let role = colours.find(role => role.name.slice(1).toLowerCase() === str.toLowerCase());
    
    if(!role) return;
    
    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.author.tag}** You now have **${role.name.slice(1)}** role.`)
    .setColor(0x33CC00)
    
    try {
      await message.member.removeRoles(colours);
      await message.member.addRole(role);
      message.channel.send(embed);
    } catch(e) {
      message.channel.send(`You shouldn't be seeing this message. Please report this error to a developer (Frankie#4073, MaC#8311 or Skarff#1122): ${e.message}`);
    }
}
