const Discord = require("discord.js");

exports.run = (client, message, args, func) => {    
    const embed = new Discord.RichEmbed()
  .setTitle("Help")
  .setDescription("Hello, I am THS Interfare (the bot), you have reached the help section! \n\nMy commands begin with `ths!`\nths!help - Shows you this tab.\nths!commands - Shows all commands.")
  .setColor(0x00CC00)
    
  message.channel.send(embed)
}
