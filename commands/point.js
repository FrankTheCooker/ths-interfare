exports.run = (client, message, args, func) => {
  if (!message.member.roles.some(r => ["eval", "+"].includes(r.name)))
      return message.channel.send("Sorry, you don't have permissions to use this!");
  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} has sent in a point.\nPoint goes to: ${member}.\nDescription added: ${args.slice(1).join(' ')}\n\nSent at:\n${message.createdAt}`).catch(console.error)
}
