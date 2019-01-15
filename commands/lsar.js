const Discord = require('discord.js');

exports.run = async (client, message, args, func) => {
    const embed = new Discord.RichEmbed()
    .setTitle("There are 21 self assignable roles")
    .setDescription(`Red\nDark Red\nOrange\nDark Orange\nYellow\nDark Yellow\nGreen\nLime Green\nCyan\nTurquoise\nLight Blue\nOcean Blue\nDark Blue\nSapphire\nCobalt\nMidnight Blue\nRoyal Blue\nPink\nMagenta\nLight Purple\nPurple`)
    .setColor(0x33CC00)
    
    message.channel.send(embed)
}
