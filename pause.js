exports.run = async (client, message, args, func, ops) => {
  
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('There is no music currently playing in this guild.');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Sorry, but you are not in the same voice channel as me.');
  
  if (fetched.dispatcher.paused) return message.channel.send('The bot is already paused.');
  
  fetched.dispatcher.pause();
  
  message.channel.send(`**${fetched.queue[0].songTitle}** has been paused.`)
}
