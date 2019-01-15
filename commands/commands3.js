const Discord = require("discord.js");

exports.run = (client, message, args, func) => {    
    
    const embed = new Discord.RichEmbed() // Executive commands: Update, Mac, Frank, Troll, Untroll, Point, Ban, Unban
     .setTitle("Executive Commands")
     .setDescription("Showing executive commands.\n\n\nlock - Locks the bot.\nunlock - Unlocks the bot.\nworking - Put the bot to `Operative`.\nbroken - Put the bot to `non-operative`.\nupdate - Add an update to the changelog.\nmac - After troll on MaC, gives MaC his roles back.\nfrank - After troll on Frank, gives Frank his roles back.\nTroll - troll an user.\nuntroll - Untroll an user.\npoint - Point an user.\nban - Ban an user.\nunban - Unban an user.")
     .setColor(0x000000)
    
    message.channel.send(embed)
}
