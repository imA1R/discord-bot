const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log BOT (Aktif, Komutlar yüklendi!`);
  console.log BOT (${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setGame(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log BOT (Oyun ismi ayarlandı!`);
  console.log BOT (` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
