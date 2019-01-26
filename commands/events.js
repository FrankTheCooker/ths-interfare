exports.run = (client, message, args, func) => {
// message.channel.send("Welcome to the new event tab!\n\nThese are the upcoming events!\nHunger Games: Hosted by \`MaC#8311\`.")
const embed = new Discord.RichEmbed()
.setColor(0x7289DA)
.setTitle("THS Interfare Events List")
.addField("Perm Events", `Hunger Games, Hosted by \`MaC#8311\`.\nYou can participate by going to <#535178568490156063>.\nNote: Held every Saturday unless cancelled or delayed (early notice).`)
.addField("Want to host an event?", "DM `\Frankie#4073\` for more information!")

message.channel.send(embed) 
}
          
