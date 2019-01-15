exports.run = (client, message, args, func) => {
  if (!message.member.roles.some(r => ["eval", "Secret"].includes(r.name))) return;
  client.guilds.get("479268202866540564").channels.get("517118784016744448").send(`${message.author} used **gameoff** *(removes the playing status)*`)

	client.user.setActivity(' ')
}
