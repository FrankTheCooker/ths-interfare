const Discord = require("discord.js");

exports.run = (client, message, args, func) => { 
    
    const embed = new Discord.RichEmbed()
  .setTitle("New commands")
  .setDescription("Showing new commands.\n\n\n**New normal/fun commands**\nlsar - Shows colour list.\nping - Gives the bot ping.\nrps - Rock Paper Scissors.\n\n**New staff commands**\nNone.\n\n**New executive commands**\nlock - Lock the bot.\nunlock - Unlocks the bot\nworking - Put the bot to `operative`.\nbroken - Put the bot to `non-operative.")
  .setColor (0x3300CC)
    
  message.channel.send(embed)
}
