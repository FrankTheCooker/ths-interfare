const Discord = require('discord.js');
const db = require("quick.db");
const send = require("quick.hook");

exports.run = async (client, message, args, func) => {
if (!message.member.roles.some(r => ["Chairman", "Vice Chairman"].includes(r.name)))
      return message.channel.send("Sorry, you don't have permissions to use this!");
    
    client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **unban**`)
    
    let user = args[0];
    if(!user) return message.channel.send("Please specify the id of a user to unban.");
 
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
  let casenumbers = new db.table('CASENUMBERs')
    let guildcasenumber = await casenumbers.fetch(`case_${message.guild.id}`)
    let a = guildcasenumber
    let b = a + 1
    casenumbers.set(`case_${message.guild.id}`, b)
    //  console.log(guildcasenumber)
    let numberunban = new db.table('UNBANNUMBERs')
    let num1 = await numberunban.fetch(`user_${user.id}_${message.guild.id}`)
    let y = 1
    let m = y + num1
    numberunban.set(`user_${user.id}_${message.guild.id}`, m)
    //await user.id(`You were unbanned in ${message.guild.name} for: ${reason}`) --Frank: This line was breaking it, it's now FIXED.
    message.channel.send(`<:success:523531815072301092> ***${user.tag} has been unbanned.***`)
    message.guild.unban(user)
  let userunban = new db.table('USERBANs')
        let num2 = await numberunban.fetch(`user_${user.id}_${message.guild.id}`)
        let unbans = await userunban.fetch(`unban_${user.id}_${num2}_${message.guild.id}`)
        userunban.set(`unban_${user.id}_${num2}_${message.guild.id}`, reason)
   const embed = new Discord.RichEmbed()
   .setAuthor(`Case ${guildcasenumber} | Unban | ${user.tag}`, user.displayAvatarURL)
   .addField("User", `${user}`, true)
   .addField("Moderator", `${message.author}`, true)
   .addField("Reason", `${reason}`, true)
   .setFooter(`ID: ${user.id}`)
   .setTimestamp()
   client.guilds.get("479268202866540564").channels.get("500783942903922698").send(embed)
}
