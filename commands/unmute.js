const Discord = require('discord.js');
const db = require("quick.db");
const send = require("quick.hook");
const fs = require("fs");

exports.run = async (client, message, args, func) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("<:no:501774212294508544> You must have the MANAGE_ROLES permission in this discord server to use this command!");

		let toMute = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
		if(!toMute) return message.channel.send("<:no:501774212294508544> You did not mention a user or specify their ID!");

		let role = message.guild.roles.find(r => r.name === "Muted");
    let berify = message.guild.roles.find(r => r.name === "Verified");
    let feelsad = message.guild.roles.find(r => r.name === "=== LR Section ===");
		
		if(!role || !toMute.roles.has(role.id)) return message.channel.send(`:radioactive: **${toMute.user.tag}** is not muted!`);

		await toMute.removeRole(role);
    await toMute.addRole(berify);
    await toMute.addRole(feelsad);

			delete client.mutes[toMute.id];

			fs.writeFile("./mutes.json", JSON.stringify(client.mutes), err => {
				if(err) throw err;
				console.log(`Successfully unmuted ${toMute.user.tag}.`);
			});
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
  
  let casenumbers = new db.table('CASENUMBERs')
    let guildcasenumber = await casenumbers.fetch(`case_${message.guild.id}`)
    let a = guildcasenumber
    let b = a + 1
    casenumbers.set(`case_${message.guild.id}`, b)
    //  console.log(guildcasenumber)
    let numberunmute = new db.table('UNMUTENUMBERs')
    let num1 = await numberunmute.fetch(`user_${toMute.id}_${message.guild.id}`)
    let y = 1
    let m = y + num1
    numberunmute.set(`user_${toMute.id}_${message.guild.id}`, m)
  
  let userunmute = new db.table('USERUNMUTEs')
        let num2 = await numberunmute.fetch(`user_${toMute.id}_${message.guild.id}`)
        let unmutes = await userunmute.fetch(`unmute_${toMute.id}_${num2}_${message.guild.id}`)
        userunmute.set(`unmute_${toMute.id}_${num2}_${message.guild.id}`, reason)
  
  const embed = new Discord.RichEmbed()
   .setAuthor(`Case ${guildcasenumber} | Unmute | ${toMute.user.tag}`, toMute.user.displayAvatarURL)
   .addField("User", `${toMute}`, true)
   .addField("Moderator", `${message.author}`, true)
   .addField("Reason", `${reason}`, true)
   .setFooter(`ID: ${toMute.id}`)
   .setTimestamp()
   
   client.guilds.get("479268202866540564").channels.get("500783942903922698").send(embed)
	 message.channel.send(`<:success:523531815072301092> Successfully unmuted **${toMute.user.tag}**.`);
   client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **unmute**`)
}
