const ytdl = require('ytdl-core');

exports.run = async (client, message, args, func) => {
  
  if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
  
  if (!message.guild.me.voiceChannel) return message.channel.send('I am not connected to the guild.');
  
  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Sorry, you aren\'t connected to the same channel as me.');
    
  message.guild.me.voiceChannel.leave();
  
  message.channel.send('Leaving channel.');
}
