exports.run = (client, message, args, func) => {
  if (message.member.roles.some(r => ["+"].includes(r.name))) return;
  message.channel.send("http://prntscr.com/lq8uzw") // https://spookyscaryskeletons.we-like-to.party/i/8xet.png
}
