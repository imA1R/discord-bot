const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
  
});

client.on('message', message => {
  if (message.toLowerCase() === prefix + 'avatar') {
    message.sendMessage(message.author.avatarURL);
  }
  
});

client.login('process.env.BOT_TOKEN');
