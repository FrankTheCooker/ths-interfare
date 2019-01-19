const Discord = require("discord.js");

exports.run = (client, message, args, func) => { 
    
    const embed = new Discord.RichEmbed()
  .setTitle("New commands")
  .setDescription("Showing new commands.\n\n\n**New normal/fun commands**\nlsar - Shows colour list.\nserverinvite - Gives perm server invite\n\n**New staff commands**\nNone.\n\n**New executive commands**\nNone.")
  .setColor (0x3300CC)
    
  message.channel.send(embed)
}
