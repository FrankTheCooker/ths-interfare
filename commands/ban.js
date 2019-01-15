const Discord = require('discord.js');
const db = require("quick.db");
const send = require("quick.hook");

exports.run = async (client, message, args, func) => {
if (!message.member.roles.some(r => ["Chairman", "Vice Chairman"].includes(r.name)))
      return message.channel.send("Sorry, you don't have permissions to use this!");
    
    client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **ban**`)
    
    let bannedmember = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!bannedmember) return message.channel.send("Please mention/specify the id of a user to ban.");
    if(!bannedmember.bannable) return message.channel.send("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
  
  let casenumbers = new db.table('CASENUMBERs')
    let guildcasenumber = await casenumbers.fetch(`case_${message.guild.id}`)
    let a = guildcasenumber
    let b = a + 1
    casenumbers.set(`case_${message.guild.id}`, b)
    //  console.log(guildcasenumber)
    let numberban = new db.table('BANNUMBERs')
    let num1 = await numberban.fetch(`user_${bannedmember.id}_${message.guild.id}`)
    let y = 1
    let m = y + num1
    numberban.set(`user_${bannedmember.id}_${message.guild.id}`, m)
    
    await bannedmember.send(`You were banned in ${message.guild.name} for: ${reason}`)
    message.channel.send(`<:success:523531815072301092> ***${bannedmember.user.tag} has been banned.***`)
    message.guild.ban(bannedmember)
  
  let userban = new db.table('USERBANs')
        let num2 = await numberban.fetch(`user_${bannedmember.id}_${message.guild.id}`)
        let bans = await userban.fetch(`ban_${bannedmember.id}_${num2}_${message.guild.id}`)
        userban.set(`ban_${bannedmember.id}_${num2}_${message.guild.id}`, reason)

   const embed = new Discord.RichEmbed()
   .setAuthor(`Case ${guildcasenumber} | Ban | ${bannedmember.user.tag}`, bannedmember.user.displayAvatarURL)
   .addField("User", `${bannedmember}`, true)
   .addField("Moderator", `${message.author}`, true)
   .addField("Reason", `${reason}`, true)
   .setFooter(`ID: ${bannedmember.id}`)
   .setTimestamp()
   
   client.guilds.get("479268202866540564").channels.get("500783942903922698").send(embed)
}
