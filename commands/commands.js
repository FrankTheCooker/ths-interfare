const Discord = require("discord.js");

exports.run = (client, message, args, func) => { 
    const embed = new Discord.RichEmbed()
  .setTitle("Commands")
  .setDescription("These are the options of this bot to search an command\n\nSay `ths!commands#` for following options.\n\nUse `ths!newcommands` for our new commands or use `ths!changelog`\n\n\nOption `1` - Normal/fun Commands.\nOption `2` - Staff commands.\nOption `3` - Executive commands.")  
    .setColor(0x3300CC)
    
  message.channel.send(embed)
}
