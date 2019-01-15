const Discord = require("discord.js");

exports.run = (client, message, args, func) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Staff Commands")
  .setDescription("Showing staff commands.\n\n\nverify - Verify an member.\nunverify - Unverify an member.\nmod - Mod an user.\nbot - Give an bot all bot roles by mention.\ntrained - Up an MIT to SM.\ntraining - Gives training roles to MIT.\nwarn - Warn an user.\nkick - Kick an user.\nreason - Add/edit an case by ID, only on warns!\npurge - purges messages.\ndm - DM's an user.")
  .setColor(0x00CC00)
    
    message.channel.send(embed)
}
