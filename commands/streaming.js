exports.run = (client, message, args, func) => {
  if (!message.member.roles.some(r => ["eval", "Secret"].includes(r.name))) return;

	client.user.setActivity(args.join(' '), {
		type: "STREAMING",
		url: "https://www.twitch.tv/macisontwitch"
	})
}
