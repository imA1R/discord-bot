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
  if (msg.content.toLowerCase() === prefix + 'ekle') {
    msg.channel.sendMessage('https://discordapp.com/oauth2/authorize?client_id=492414649044697108&scope=bot&permissions=0');
	 
  }
  if (msg.content.toLowerCase() === prefix + 'youtube') {
    msg.channel.sendMessage('https://www.youtube.com/channel/UCtbbBe6GYgouA2E-eXa9ACg');
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
		

client.login(process.env.BOT_TOKEN);
