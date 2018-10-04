const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');


var prefix =ayarlar.prefix

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.sendMessage('as');
  }
  if (msg.content.toLowerCase() === 'selamün aleyküm') {
    msg.channel.sendMessage('Aleyküm Selam');
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.channel.sendMessage('Kardeşim Ping ->' +  client.ping  + 'ms <-');
  }
  if (msg.content.toLowerCase() === 'ahmet') {
    msg.channel.sendMessage('he');
  }
  if (msg.content.toLowerCase() === 'piç') {
    msg.channel.sendMessage('Adını Sormadım');
  }
  if (msg.content.toLowerCase() === 'yarrak') {
    msg.channel.sendMessage('Adını Sormadım');
  }
  if (msg.content.toLowerCase() === 'oç') {
    msg.channel.sendMessage('Adını Sormadım');
  }
  if (msg.content.toLowerCase() === 'ibne') {
    msg.channel.sendMessage('Adını Sormadım');
  }
  if (msg.content.toLowerCase() === 'salak') {
    msg.channel.sendMessage('Adını Sormadım');
  }
	
});

client.on('guildMemberAdd', member => {

var channel = member.guild.channels.find('name' , 'welcome');
 if(!channel) return
 
 
 
 var role = member.guild.roles.find(' name ', ' New Member ');
 if(!role) return; 

 member.addrole(role);
 
 channel.send(member + ' artık ' + role + 'Rolü İle Aramızda');
 
 member.send('Aramıza Hosgeldin geldin! Artık Allah ın Bir  Rolüne Sahipsin!')
 

 

  
		 
});

client.login(process.env.BOT_TOKEN);
