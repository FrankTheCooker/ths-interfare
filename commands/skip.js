exports.run = async (client, message, args, func, ops) => {
  
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('There is no music currently playing in this guild.');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Sorry, but you are not in the same voice channel as me.');
  
  let userCount = message.member.voiceChannel.members.size;
  
  let required = Math.ceil(userCount/2);
  
  if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
  
  if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry, you have already voted to skip. ${fetched.queue[0].voteSkips.length}/${required} required.`);
  
  fetched.queue[0].voteSkips.push(message.member.id);
  
  ops.active.set(message.guild.id, fetched);
  
  if (fetched.queue[0].voteSkips.length >= required) {
  
  message.channel.send('The current song has been skipped.');
    
    return fetched.dispatcher.emit('finish');
  
}
  
  message.channel.send(`Vote recorded. ${fetched.queue[0].voteSkips.length}/${required} required`);
  
}
