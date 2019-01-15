const Discord = require("discord.js");

exports.run = (client, message, args, func) => {
    
    const embed = new Discord.RichEmbed()
  .setTitle("Normal/fun Commands")
  .setDescription("Showing the normal/fun commands.\n\n\ncommands - Shows this tab.\nhelp - Shows help tab.\nchangelog - Shows changelog of this bot.\lsar - Shows colour roles list\nrps - Rock Paper Scissors.\nping - Gives the bot ping.\nuserinfo - Shows your userinfo, tag a user in command to see their userinfo.\nem - Fun command.\nwelcome - Welcome an user, only user once on a user, to be used in #clubhouse.\naskverify - Ask verify to get verified, gets used in #verify, abusing will result in consequences.\ntags - All our tags we use.\npizza - Kidnap an pizza deliverer.\nunpizza - Unkidnap a pizza deliverer.")
  .setColor(0xFF3300)
    
    message.channel.send(embed)
}
