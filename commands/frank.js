const Discord = require('discord.js');

exports.run = async (client, message, args, func) => {
	let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!message.member.roles.some(r => ["+"].includes(r.name)))
      return message.channel.send("Sorry, you don't have permissions to use this!");
	let role = message.guild.roles.find(r => r.name === "+");
	let role1 = message.guild.roles.find(r => r.name === "#Cyan")
  let role2 = message.guild.roles.find(r => r.name === "Chairman");
  let role3 = message.guild.roles.find(r => r.name === "Dyno Verification");
  let role4 = message.guild.roles.find(r => r.name === "Server Moderator");
  let role5 = message.guild.roles.find(r => r.name === "Verified");
  let role6 = message.guild.roles.find(r => r.name === "Bilingual");
  let role7 = message.guild.roles.find(r => r.name === "Notified People");
  let role8 = message.guild.roles.find(r => r.name === "+Announcer Permissions");
  let role9 = message.guild.roles.find(r => r.name === "Support Team");
  let role10 = message.guild.roles.find(r => r.name === "Staff");
  let role11 = message.guild.roles.find(r => r.name === "=== LR Section ===");
  let role12 = message.guild.roles.find(r => r.name === "=== Level Roles ===");
  let role13 = message.guild.roles.find(r => r.name === "=== Colour Roles ===");
  let role14 = message.guild.roles.find(r => r.name === "=== MR Section ===");
  let role15 = message.guild.roles.find(r => r.name === "=== HR Section ===");
  let role16 = message.guild.roles.find(r => r.name === "=== Bot Managing ===");
  let role17 = message.guild.roles.find(r => r.name === "Updates");
  let role18 = message.guild.roles.find(r => r.name === "=== Normal ===");
  let role19 = message.guild.roles.find(r => r.name === "eval");
  let role20 = message.guild.roles.find(r => r.name === "Level 20");
  let role21 = message.guild.roles.find(r => r.name === "THS Game Developer");
	let role22 = message.guild.roles.find(r => r.name === "Customer Support");
	let role23 = message.guild.roles.find(r => r.name === "Kidnapped Delivery person");

	member.addRole(role).catch(console.error);
	member.addRole(role1).catch(console.error);
	member.addRole(role2).catch(console.error);
	member.addRole(role3).catch(console.error);
	member.addRole(role4).catch(console.error);
	member.addRole(role5).catch(console.error);
	member.addRole(role6).catch(console.error);
	member.addRole(role7).catch(console.error);
	member.addRole(role8).catch(console.error);
	member.addRole(role9).catch(console.error);
	member.addRole(role10).catch(console.error);
	member.addRole(role11).catch(console.error);
	member.addRole(role12).catch(console.error);
	member.addRole(role13).catch(console.error);
	member.addRole(role14).catch(console.error);
	member.addRole(role15).catch(console.error);
	member.addRole(role16).catch(console.error);
	member.addRole(role17).catch(console.error);
	member.addRole(role18).catch(console.error);
	member.addRole(role19).catch(console.error);
	member.addRole(role20).catch(console.error);
	member.addRole(role21).catch(console.error);
	member.addRole(role22).catch(console.error);
	member.addRole(role23).catch(console.error);
  client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **frank**`)
  message.channel.send(`<:success:523531815072301092> Changed roles for ${member.user.tag}, +${role.name}, +${role2.name}, +${role3.name}, +${role4.name}, +${role5.name}, +${role6.name}, +${role7.name}, +${role8.name}, +${role9.name}, +${role10.name}, +${role11.name}, +${role12.name}, +${role13.name}, +${role14.name}, +${role15.name}, +${role16.name}, +${role17.name}, +${role18.name}, +${role19.name}, +${role20.name}, +${role21.name}, +${role22.name}, +${role23.name}`)
}
