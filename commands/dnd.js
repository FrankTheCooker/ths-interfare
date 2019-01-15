exports.run = (client, message, args, func) => {
  if (!message.member.roles.some(r => ["Server Moderator", "eval"].includes(r.name))) return;

	client.user.setStatus('dnd')
}
