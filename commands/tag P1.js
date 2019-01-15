exports.run = (client, message, args, func) => {
  if (message.member.roles.some(r => ["+"].includes(r.name))) return;
  message.channel.send("http://prntscr.com/lq8ujn") // https://spookyscaryskeletons.we-like-to.party/i/z2a4.png
}
