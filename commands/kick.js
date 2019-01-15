const Discord = require('discord.js');
const db = require("quick.db");
const send = require("quick.hook");

exports.run = async (client, message, args, func) => {
  if(!message.member.roles.some(r => ["Chairman", "Vice Chairman", "Server Moderator"].includes(r.name)))
      return message.channel.send("Sorry, you don't have permissions to use this!");
    
    client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **kick**`)
    
    let kickedmember = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!kickedmember) return message.channel.send("Please mention/specify the id of a user to kick.");
    if(!kickedmember.kickable) return message.channel.send("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
  
  let casenumbers = new db.table('CASENUMBERs')
    let guildcasenumber = await casenumbers.fetch(`case_${message.guild.id}`)
    let a = guildcasenumber
    let b = a + 1
    casenumbers.set(`case_${message.guild.id}`, b)
    //  console.log(guildcasenumber)
    let numberkick = new db.table('KICKNUMBERs')
    let num1 = await numberkick.fetch(`user_${kickedmember.id}_${message.guild.id}`)
    let y = 1
    let m = y + num1
    numberkick.set(`user_${kickedmember.id}_${message.guild.id}`, m)
    
   message.channel.send(`<:success:523531815072301092> ***${kickedmember.user.tag} has been kicked.***`)
   await kickedmember.send(`You were kicked in ${message.guild.name} for: ${reason}`)
   await kickedmember.kick(reason)
  
  let userkick = new db.table('USERKICKSs')
        let num2 = await numberkick.fetch(`user_${kickedmember.id}_${message.guild.id}`)
        let kicks = await userkick.fetch(`kick_${kickedmember.id}_${num2}_${message.guild.id}`)
        userkick.set(`kick_${kickedmember.id}_${num2}_${message.guild.id}`, reason)
  
  const embed = new Discord.RichEmbed()
   .setAuthor(`Case ${guildcasenumber} | Kick | ${kickedmember.user.tag}`, kickedmember.user.displayAvatarURL)
   .addField("User", `${kickedmember}`, true)
   .addField("Moderator", `${message.author}`, true)
   .addField("Reason", `${reason}`, true)
   .setFooter(`ID: ${kickedmember.id}`)
   .setTimestamp()
   
   client.guilds.get("479268202866540564").channels.get("500783942903922698").send(embed)
}
