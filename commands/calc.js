const math = require('mathjs');
const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
if (!args[0]) return message.channel.send("Please input a calculation.");

let resp;
try {
    resp = math.eval(args.join(' '));
} catch (e) {
     return message.channel.send("Please input a **valid** calculation.");
}

  const embed = new Discord.RichEmbed()
  .setColor()
  .setTitle("Mathematical Calculation")
  .addField("Input", `\`\`\`js\n${args.join('')}\`\`\``)
  .addField('Output', `\`\`\`js\n${resp}\`\`\``)
  
  message.channel.send(embed);
}
