const Discord = require('discord.js');
const db = require("quick.db");
const send = require("quick.hook");
const fs = require("fs");

exports.run = async (client, message, args, func) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("<:no:501774212294508544> You must have the MANAGE_ROLES permission in this discord server to use this command!");

		let toMute = message.guild.member(message.mentions.users.first()) || message.guild.member(args[0]);
		if(!toMute) return message.channel.send("You did not mention a user or specify their ID.");

		if(toMute.id === message.author.id) return message.channel.send("<:no:501774212294508544> What's the point of even trying?");
		if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send(":radioactive: You cannot mute a user who has a higher role than you or has the same role as you.")

		let role = message.guild.roles.find(r => r.name === "Muted");
    let berify = message.guild.roles.find(r => r.name === "Verified");
    let feelsad = message.guild.roles.find(r => r.name === "=== LR Section ===");
		if(!role) {
				try {
				role = await message.guild.createRole({
					name: "Muted",
					color: "#000001",
					permissions: []
				});

			  	message.guild.channels.forEach(async (channel, id) => {
			  		await channel.overwritePermissions(role, {
			  			SEND_MESSAGES: false,
			  			ADD_REACTIONS: false,
			  			CREATE_INSTANT_INVITE: false
			  		});
			  	});			
			} catch(e) {
				console.log(e.stack);
			}
		}	
		
		if(toMute.roles.has(role.id)) return message.channel.send(`:radioactive: Member **${toMute.user.tag}** is already muted!`);

		client.mutes[toMute.id] = {
			guild: message.guild.id,
			time: Date.now() + parseInt(args[1]) * 1000
		}

		await toMute.addRole(role);
		await toMute.removeRole(berify);
    await toMute.removeRole(feelsad);
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
  
  let casenumbers = new db.table('CASENUMBERs')
    let guildcasenumber = await casenumbers.fetch(`case_${message.guild.id}`)
    let a = guildcasenumber
    let b = a + 1
    casenumbers.set(`case_${message.guild.id}`, b)
    //  console.log(guildcasenumber)
    let numbermute = new db.table('MUTENUMBERs')
    let num1 = await numbermute.fetch(`user_${toMute.id}_${message.guild.id}`)
    let y = 1
    let m = y + num1
    numbermute.set(`user_${toMute.id}_${message.guild.id}`, m)
  
  let usermute = new db.table('USERMUTEs')
        let num2 = await numbermute.fetch(`user_${toMute.id}_${message.guild.id}`)
        let mutes = await usermute.fetch(`mute_${toMute.id}_${num2}_${message.guild.id}`)
        usermute.set(`mute_${toMute.id}_${num2}_${message.guild.id}`, reason)
  
  const embed = new Discord.RichEmbed()
   .setAuthor(`Case ${guildcasenumber} | Mute | ${toMute.user.tag}`, toMute.user.displayAvatarURL)
   .addField("User", `${toMute}`, true)
   .addField("Moderator", `${message.author}`, true)
   .addField("Reason", `${reason}`, true)
   .setFooter(`ID: ${toMute.id}`)
   .setTimestamp()
   
   client.guilds.get("479268202866540564").channels.get("500783942903922698").send(embed)

		fs.writeFile("./mutes.json", JSON.stringify(client.mutes, null, 4), err => {
			if(err) throw err;
			message.channel.send(`<:success:523531815072301092> Succesfully muted **${toMute.user.tag}**.`);
      client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **mute**`)
		});
}
