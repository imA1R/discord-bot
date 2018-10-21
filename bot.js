const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
require('./util/eventLoader')(client);

var prefix =ayarlar.prefix

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


	      


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;

	    
});	    
 

client.on("guildMemberAdd", member => {
	
	var channel = member.guild.channels.find("name", "giriş-çıkış");
	if (!channel) return;
	
	var role = member.guild.roles.find("name", "Community");
	if (!role) return;
	
	member.addRole(role); 
	
	channel.send(member + " artık " + role + " rolü ile Serverimizde.");
	
	member.send("Aramıza hoş geldin! Artık Serverimizdesin")
	
});

client.on('message', msg => {
  if (msg.content === 'piç') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'oç') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'göt') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'yarrak') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orospu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'anasız') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'evladı') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'kansız') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sikim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'anasız') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'oç') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'p1c') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'götveren') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sikerimha') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bacını') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bacını sikim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});


client.on('message', msg => {
  if (msg.content === 'babanı') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'babanı sikim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'oro spu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'amk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'mk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'a m k') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'lan') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});


client.on('message', msg => {
  if (msg.content === 'sokuk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});


client.on('message', msg => {
  if (msg.content === 'kes sikerim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ananı cagır') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bacının mk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orusbu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orsbu çocu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'aq') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});client.on('message', msg => {
  if (msg.content === 'kel') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'yarram') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'yaram') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'yrk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ibne') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'salak') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'yrm') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ibnenin çocuğu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === '1bne') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === '1bnenin çocuğu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'anan elimde') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'anan') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'anan bende') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ananı sikiyim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'annenin amk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'annenin amq') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ananın amq') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'amına koyim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'amına') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'beyinsiz') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'pezevenk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'pezzo') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'pezo') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'pezzevenk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'pezeveng') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'pezzeveng') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ibnenin torunu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ebenin amı') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ebenin') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'piçin torunu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'piç kurusu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'göt lalesi') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'g0t lalesi') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'götlek') {
   msg.delete(2)
    msg.reply(' Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'g0tlek') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bacını') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bacını sikim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'çüksüz') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'yarraksız') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'yaraksız') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'pipisiz') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'yrksız') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'veled') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'velet') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'veuled') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bebe') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'amına') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'böyle işin amq') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'böyle işin amk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'amına koyam') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'amını yüzünü') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ananı sikiyorum') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ananı siktim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'pörtlek') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sex') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'seks') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sikerim seni') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sikerimseni') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sikik') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bok çuvalı') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'amın feryadı') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'şişko') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ebenin amı') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'pzvnk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'pezzovenk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'pezzoveng') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'yarramın başı') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'yarramın baş1') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bacısını aldığım') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orosbu cocugu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orosbunun torunu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orosbucocu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orosbuçocu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orosbuçocuğu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orosbucocugu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orosbutorunu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orsbucocugu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orsbuçocuğu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'amını yüzünü sikim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'götünü sikim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sikim kadar boyun türlü türlü huyun') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'kansız orosbu cocuğu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'knsız') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'namussuz') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'namussuz orosbu çocuğu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bacınıaliyim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bacınıalim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bacısınıaldığım') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ananbende') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ananelimde') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ananısikim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ananı sikim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bok torbası') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'bok çuvalı') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'amcık') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'am cık') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sana girsin') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sanagirsin') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'götüne girsin') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'kapak olsun') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'anan') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'babanı sikim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'babanı sikiyim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'babanısikiyim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'anaan') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'aanan') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'annenin amı') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'kanser orosbu çocuğu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'dick') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'cyka') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'fuck') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'fuck you') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'fucking') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orrosbu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'orrrosbu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'oruspu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'oruspu çucuğu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'eben') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sülaleni sikiyim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === '7 ceddini sikiyim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === '7ceddini sikim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'yedi ceddini sikim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'yedi ceddini') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sülalenin amk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sülaleni sikim') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ebenin ta amk') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ebenin amq') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'ebenin') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'göt çukuru') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if (msg.content === 'sikim kadar boyu') {
   msg.delete(2)
    msg.reply('Küfür Etme');
  }
});

client.on('message', msg => {
  if(msg.content === prefix +'sil') {
   msg.reply('50 veya 100');
  }
});
	  
client.on('message', msg => {
  if(msg.content === prefix +'sil 100') {
   msg.delete(100)
    msg.reply('100 msj temizlendi !');
  }
});
	  
client.on('message', msg => {
  if(msg.content === prefix +'sil 50') {
   msg.delete(50)
    msg.reply('50 msj temizlendi !');  
  }


	   
 	      
	      
 
	
	
   
	
});
		

client.login(process.env.BOT_TOKEN);
