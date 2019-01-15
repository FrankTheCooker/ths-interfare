const Discord = require("discord.js");

exports.run = (client, message, args, func) => {    
    message.channel.send("u wot m8");
    if(!args[0]) message.channel.send("Did you put an suggestion in?");
    
    var reason = args.join(" ");
    message.channel.send(reason);
    
    const embed = new Discord.RichEmbed()
    .setTitle("Incomming Bot Suggestion")
    .setDescription(`Suggested by: ${message.author}`)
    .setColor(0x33CC00)
    .addField("Suggestion:", reason)
    .setFooter(message.createdAt);
    
    client.guilds.get("479268202866540564").channels.get("529774432395460622").send(embed)
     message.reply("The suggestion has gone through!")
     message.delete();
}
