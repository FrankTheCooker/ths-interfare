exports.run = async (client, message, args, func, ops) => {
  
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send('There is no music currently playing in this guild.');
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('Sorry, but you are not in the same voice channel as me.');

  if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('Please input a number between 0-200.');
  
  fetched.dispatcher.setVolume(args[0]/100);
  
  message.channel.send(`Volume for **${fetched.queue[0].songTitle}** has been set to **${args[0]}**.`);
}
