const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);             
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const db = require("quick.db");
const ms = require("parse-ms");
const moment = require("moment");
const profanities = require("profanities");

const config = require("./config.json");

const func = require('./functions.js');
console.log(func)

//const prefix = config.prefix;
const ownerID = config.ownerID;

/* global Map*/
/* global client*/
const active = new Map();

client.mutes = require("./mutes.json");

client.on("ready", () => {
  console.log(`Launched. Defined as BOT. Username is ${client.user.username}.`);
  //client.user.setStatus('invisible');
  //client.user.setActivity('TEST 1');
  client.user.setStatus('online');
  client.user.setActivity('for ths!help', {type: 'WATCHING'});
  //client.user.setStatus('online');
  //client.user.setActivity('for ths!help', {type: 'WATCHING'});
  client.guilds.get("523528691142361108").channels.get("529256682539319316").send(`Logged as THS Interfare (Restart or received ping)`)
  
  client.setInterval(() => {
        for(let i in client.mutes) {
            let time = client.mutes[i].time;
            let guildId = client.mutes[i].guild;
            let guild = client.guilds.get(guildId);
            let member = guild.members.get(i);
            let mutedRole = guild.roles.find(r => r.name === "Muted");
            if(!mutedRole) continue;

            if(Date.now() > time) {
                console.log(`${i} is now able to be unmuted!`)
            
                member.removeRole(mutedRole);
                delete client.mutes[i];

                fs.writeFile("./mutes.json", JSON.stringify(client.mutes), err => {
                    if(err) throw err;
                    console.log(`Successfully unmuted ${member.user.tag}.`)
                })
            }
        }
    }, 5000)
});

client.on("message", async message => {
  if (message.author.bot) return;
  
  var prefix = 'ths!';
  let fetched = await db.fetch(`prefix_${message.guild.id}`);
  if (fetched === null) prefix = 'ths!';
  else prefix = fetched;
  
  let msg = message.content.toUpperCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  
// Announcments
if (message.content.startsWith(config.prefix + "feed announce updates")) {
  if (!message.member.roles.some(r => ["+Announcer Permissions"].includes(r.name))) return;
  message.delete();
  client.guilds.get("479268202866540564").channels.get("489498856166522882").send("<@&513775638805741568>: " + args.splice(2).join(' '))
}

if (message.content.startsWith(config.prefix + "feed announce staff")) {
  if (!message.member.roles.some(r => ["+Announcer Permissions"].includes(r.name))) return;
  message.delete();
  client.guilds.get("479268202866540564").channels.get("517408740123738113").send("<@&517409402446151680>: " + args.splice(2).join(' '))
}
  
if (message.content.startsWith(config.prefix + "feed announce huge")) {
  if (!message.member.roles.some(r => ["+Announcer Permissions"].includes(r.name))) return;
  message.delete();
  client.guilds.get("479268202866540564").channels.get("489498856166522882").send("@everyone: " + args.splice(2).join(' '))
}
  
if (message.content.startsWith(config.prefix + "feed announce non-ping")) {
  if (!message.member.roles.some(r => ["+Announcer Permissions"].includes(r.name))) return;
  message.delete();
  client.guilds.get("479268202866540564").channels.get("489498856166522882").send("<@&501073385984622592>: " + args.splice(2).join(' '))
}
  
if (message.content.startsWith(config.prefix + "feed announce ping")) {
  if (!message.member.roles.some(r => ["+Announcer Permissions"].includes(r.name))) return;
  message.delete();
  client.guilds.get("479268202866540564").channels.get("489498856166522882").send("<@&489504532200554513>: " + args.splice(2).join(' '))
}
  
if (message.content.startsWith(config.prefix + "commands 1")) {
  const embed = new Discord.RichEmbed()
  .setTitle("Normal/fun Commands")
  .setDescription("Showing the normal/fun commands.\n\n\ncommands - Shows this tab.\nhelp - Shows help tab.\nchangelog - Shows changelog of this bot.\lsar - Shows colour roles list\nrps - Rock Paper Scissors.\nping - Gives the bot ping.\nuserinfo - Shows your userinfo, tag a user in command to see their userinfo.\nem - Fun command.\nwelcome - Welcome an user, only user once on a user, to be used in #clubhouse.\naskverify - Ask verify to get verified, gets used in #verify, abusing will result in consequences.\ntags - All our tags we use.\npizza - Kidnap an pizza deliverer.\nunpizza - Unkidnap a pizza deliverer.")
  .setColor(0xFF3300)
    
    message.channel.send(embed)
}
  
if (message.content.startsWith(config.prefix + "commands 2")) {
  const embed = new Discord.RichEmbed()
  .setTitle("Staff Commands")
  .setDescription("Showing staff commands.\n\n\nverify - Verify an member.\nunverify - Unverify an member.\nmod - Mod an user.\nbot - Give an bot all bot roles by mention.\ntrained - Up an MIT to SM.\ntraining - Gives training roles to MIT.\nwarn - Warn an user.\nkick - Kick an user.\nreason - Add/edit an case by ID, only on warns!\npurge - purges messages.\ndm - DM's an user.")
  .setColor(0x00CC00)
    
    message.channel.send(embed)
}

if (message.content.startsWith(config.prefix + "commands 3")) {
  const embed = new Discord.RichEmbed() // Executive commands: Update, Mac, Frank, Troll, Untroll, Point, Ban, Unban
     .setTitle("Executive Commands")
     .setDescription("Showing executive commands.\n\n\nlock - Locks the bot.\nunlock - Unlocks the bot.\nworking - Put the bot to `Operative`.\nbroken - Put the bot to `non-operative`.\nupdate - Add an update to the changelog.\nmac - After troll on MaC, gives MaC his roles back.\nfrank - After troll on Frank, gives Frank his roles back.\nTroll - troll an user.\nuntroll - Untroll an user.\npoint - Point an user.\nban - Ban an user.\nunban - Unban an user.")
     .setColor(0x000000)
    
    message.channel.send(embed)
}
  
  // THS

  if (message.channel.id === '493175125739307028') {
  	if (message.content.startsWith("**")) {
  	message.react('501774193004904449');
  	message.react('501774212294508544');
  }
}
  
 if (message.channel.id === '528694151252934676') {
   if (message.content.startsWith("**")) {
     message.react('501774193004904449')
     message.react('501774212294508544')
   }
 }
  
  if (message.channel.id === '518873671050461214') {
  	if (message.content.startsWith("Complaint:")) {
  	message.react('🕒');
  }
}
  
  if (message.content.startsWith("<@523504302434811905> prefix")) {
   message.reply("Please use `ths!help`.")
  }
  
  if (!message.content.startsWith(prefix)) return;
  
    // Command Handler
    try {
        let ops = {
          active: active
      }
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, func, ops);
    } catch (e) {
        console.log(e.stack);
    } finally {
        console.log(`${message.author.username} ran the command: ${cmd}`);
    }
  
});

function clean(text) {
  if (typeof(text) === "string") {
    return text.replace(/``/g, "`" + String.fromCharCode(8203) + "`").replace(/@/g, "@" + String.fromCharCode(8203));
  } else if (text !== null && text !== undefined) {
    return text.toString().replace(/``/g, "`" + String.fromCharCode(8203) + "`").replace(/@/g, "@" + String.fromCharCode(8203))
  } else {
    return text;
  }
}

client.on('guildMemberAdd', member => {
    member.addRole(member.guild.roles.find("id", "489498087233159177"))
});

client.on('messageReactionAdd', async (reaction, user) => {
    const message = reaction.message;
    if (reaction.emoji.name !== '⭐') return;
    const starboardChannel = client.guilds.get("479268202866540564").channels.get("518244926954405920");
    const starChannel = starboardChannel;
    if (!starChannel) return message.channel.send(`It appears that you do not have a \`${starboardChannel}\` channel.`); 
    const fetchedMessages = await starChannel.fetchMessages({ limit: 100 });
    const stars = fetchedMessages.find(m => m.embeds[0].footer.text.startsWith('⭐') && m.embeds[0].footer.text.endsWith(message.id));
    if (stars) {
      const star = /^\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/.exec(stars.embeds[0].footer.text);
      const foundStar = stars.embeds[0];
      const image = message.attachments.size > 0 ? await this.extension(reaction, message.attachments.array()[0].url) : '';
      const embed = new Discord.RichEmbed()
        .setColor(foundStar.color)
        .setDescription(foundStar.description)
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()
        .setFooter(`⭐ ${parseInt(star[1])+1} | ${message.id}`)
        .setImage(image);
      const starMsg = await starChannel.fetchMessage(stars.id);
      await starMsg.edit({ embed });
    }
    if (!stars) {
      const image = message.attachments.size > 0 ? await this.extension(reaction, message.attachments.array()[0].url) : '';
      if (image === '' && message.cleanContent.length < 1) return message.channel.send(`${user}, you cannot star an empty message.`);
      const embed = new Discord.RichEmbed()
        .setColor(15844367)
        .setDescription(message.cleanContent)
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp(new Date())
        .setFooter(`⭐ 1 | ${message.id}`)
        .setImage(image);
      await starChannel.send({ embed });
    }
});

client.on('messageReactionRemove', async (reaction, user) => {
    const message = reaction.message;
    if (reaction.emoji.name !== '⭐') return;
    const starboardChannel = client.guilds.get("479268202866540564").channels.get("518244926954405920");
    const starChannel = starboardChannel;
    if (!starChannel) return message.channel.send(`It appears that you do not have a \`${starboardChannel}\` channel.`); 
    const fetchedMessages = await starChannel.fetchMessages({ limit: 100 });
    const stars = fetchedMessages.find(m => m.embeds[0].footer.text.startsWith('⭐') && m.embeds[0].footer.text.endsWith(reaction.message.id));
    if (stars) {
      const star = /^\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/.exec(stars.embeds[0].footer.text);
      const foundStar = stars.embeds[0];
      const image = message.attachments.size > 0 ? await this.extension(reaction, message.attachments.array()[0].url) : '';
      const embed = new Discord.RichEmbed()
        .setColor(foundStar.color)
        .setDescription(foundStar.description)
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()
        .setFooter(`⭐ ${parseInt(star[1])-1} | ${message.id}`)
        .setImage(image);
      const starMsg = await starChannel.fetchMessage(stars.id);
      await starMsg.edit({ embed });
      if(parseInt(star[1]) - 1 == 0) return starMsg.delete(1000);
    }
}); 

client.login(process.env.token);
