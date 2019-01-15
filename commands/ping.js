const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
    //message.channel.send("Pong! " + (Date.now() - message.createdTimestamp) + "ms")
    const embed = new Discord.RichEmbed()
    .setTitle("Pong!")
    .setDescription((Date.now() - message.createdTimestamp) + "ms")
    .setColor(0x33CC00)
    
    message.channel.send(embed);
    }
