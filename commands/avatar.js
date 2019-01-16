const Discord = require('discord.js');
const sm = require('string-similarity');

exports.run = (client, message, args, func) => {
  
  let members = [];
  let indexes = [];
  
  message.guild.members.forEach(function(member){
    members.push(member.user.username);
    indexes.push(member.id);
  })
  let match = sm.findBestMatch(args.join(' '), members);
  let username = match.bestMatch.target;
  let member = message.guild.members.get(indexes[members.indexOf(username)])
  let usernameUser = '';
  let UserMention = '';
  
  if(!args[0]) {
    usernameUser = message.author
    UserMention = message.member
  } else {
  let mention = message.mentions.users.first()
    usernameUser = mention || member.user
    UserMention = message.mentions.members.first() || message.guild.members.get(args[0]) || member
  }
  message.channel.send(`\`${usernameUser.tag}\`'s avatar is: ${usernameUser.displayAvatarURL({size: 1024})}`)
}