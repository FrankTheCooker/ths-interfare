const Discord = require('discord.js');

exports.run = (client, message, args, func) => {
    if(!args[0]) return message.reply("Please use Rock, Paper or Scissors.")

    var options = ["rock", "paper", "scissors"];

    var result = options[Math.floor(Math.random() * options.length)];

    if(args[0] === "rock"){

      if(result === "paper"){

        message.channel.send('I got **paper**, I win.');

      }else if(result === "scissors"){
          message.channel.send('I got **scissors**, you win.');

      }else if(result === "rock"){
        message.channel.send('I got **rock**, we both got the same one.');
}}
      // -------------
      else if(args[0] === "paper"){

      if(result == "paper"){

        message.channel.send('I got **paper**, we both got the same one.');

      }else if(result === "scissors") {
          message.channel.send('I got **scissors**, I win.');

      }else if(result === "rock") {
        message.channel.send('I got **rock**, you win.');
}}
        // -------------------------------
        else if(args[0] === "scissors") { 

      if(result == "paper"){

        message.channel.send('I got **paper**, you win.');

      }else if(result === "scissors"){
          message.channel.send('I got **scissors**, We both got the same one.');

      }else if(result === "rock"){
        message.channel.send('I got **rock**, I win.');
        }
    }
}
