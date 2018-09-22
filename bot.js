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
  if (msg.content.toLowerCase() === 'ping') {
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
  if (message.content === prefix + 'reboot') {
	  if (message.author.id === '351650610648580096') {
		  message.channel.sendMessage('Bot Yeniden Başlatılıtor').then (msg => {
			  console.log('Bot Yeniden Başlatılıtor');
		  process.exit(0);
		  });
	  } else { 
	  message.channeld.sendMessage('Buna Yetkin Yok ! ');
	  
	  }
	  
  }
		 
});

client.login(ayarlar.token);
