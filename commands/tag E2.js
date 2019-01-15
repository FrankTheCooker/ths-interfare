exports.run = (client, message, args, func) => {
  if (message.member.roles.some(r => ["+"].includes(r.name))) return;
  message.channel.send("http://prntscr.com/lq8v6l") // https://spookyscaryskeletons.we-like-to.party/i/o7ah.png
}
