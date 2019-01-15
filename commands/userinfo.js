const Discord = require('discord.js');
const moment = require("moment");

exports.run = (client, message, args, func) => {
  let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
  const member = message.guild.member(user);
  
  let status = {
    online: "<a:plexionline:527151241734914067> Online",
    idle: "<a:plexiidle:527151229009264672> Idle",
    dnd: "<a:plexidnd:527151214371274782> Do Not Disturb",
    offline: "<a:plexioffline:527151255420928010> Offline",
    streaming: "<a:plexistreaming:527151272642609152> Streaming"
  };
  
  const embed = new Discord.RichEmbed()
	.setColor(0x0078D7)
  .setThumbnail(user.avatarURL)
	.setAuthor(`${user.username}#${user.discriminator}`, 'https://cdn.discordapp.com/avatars/295978095129657355/2548f446733545dd1396a014ba2c4143.png?size=2048')
  .addField("Status", `${status[user.presence.status]}`, true)
	.addField("Game", `${user.presence.game ? user.presence.game.name : 'Not playing anything'}`, true)
  .addField("Joined", `${moment.utc(member.joinedAt).format('ddd, MMM D YYYY HH:mm:ss [GMT]')}`, true)
	.addField("Registered", `${moment.utc(user.createdAt).format('ddd, MMM D YYYY HH:mm:ss [GMT]')}`, true)
	.addField("Username", `${user.username}#${user.discriminator}`, true)
	.addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : 'No nickname'}`, true)
  .addField("ID", `${user.id}`, false)
  .addField(`Roles [${user.roles.size}]`, message.guild.member(member).roles.map(i => i).join(', '), false)
	.setFooter(`${message.author.username}#${message.author.discriminator}`, 'https://cdn.discordapp.com/avatars/295978095129657355/2548f446733545dd1396a014ba2c4143.png?size=2048')
  .setTimestamp()
    
  message.channel.send({embed});
}
