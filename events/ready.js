const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  client.user.setStatus("online");
  client.user.setGame(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log(` BOT: Oyun ismi ayarlandı!`);
  console.log(` BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
