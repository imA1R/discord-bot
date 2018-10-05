const Discord = require('discord.js');
const client = new Discord.Client();

client.login('token here');

client.on('message', message => {
  if (!message.guild) return;
  
  if (message.toLowerCase() === prefix +'katıl') {
    
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  
});

const dispatcher = connection.playFile('C:/Users/Discord/Desktop/myfile.mp3');

dispatcher.on('end', () => {
  
  console.log(e);
  
});

dispatcher.setVolume(0.5); // Set the volume to 50%
dispatcher.setVolume(1);

console.log(dispatcher.time);

dispatcher.pause();
dispatcher.resume();
dispatcher.end();

connection.playStream(myReadableStream);

const fs = require('fs');
const stream = fs.createReadStream('./test.mp3');
connection.playStream(stream);

connection.playArbitraryInput('http://youtube.com/sound.mp3');
