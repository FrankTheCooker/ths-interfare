exports.run = (client, message, args, func) => {
if (message.member.roles.some(r => ["eval", "Secret"].includes(r.name))) return message.channel.send("https://tenor.com/view/yeet-gif-4475969 YEET! <a:thsjustice:534825840475897856> Really thought you'd be able to use it? Think again.")
  
  try {
      delete require.cache[require.resolve(`./${args[0]}.js`)];
  } catch (e) {
  
    return message.channel.send(`Unable to reload: ${args[0]}`);
    }
    
    message.channel.send(`Successfuly reloaded: ${args[0]}`);
}
