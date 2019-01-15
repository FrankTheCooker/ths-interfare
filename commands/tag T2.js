exports.run = (client, message, args, func) => {
  if (message.member.roles.some(r => ["+"].includes(r.name))) return;
  message.channel.send("http://prntscr.com/lq8tp2") // https://spookyscaryskeletons.we-like-to.party/i/a7lp.png
}
