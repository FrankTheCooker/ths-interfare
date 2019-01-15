const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
	if (!message.member.roles.some(r => ["eval", "Secret"].includes(r.name))) return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setColor(0x0078D7)
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`🆘\`ERROR\` \`\`\`js\n${e}\n\`\`\``);
    }
}
