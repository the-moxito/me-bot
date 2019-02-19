//Версия 0.2.1

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("Ожидание установки статуса...");
client.user.setPresence({
  status: 'dnd',
  game: {
    name: 'Cosmoteer', 
    state: 'В игре', 
    details: 'Играет за корабль Raketa', 
type: 'PLAYING', 
application_id: '442351930929577995', 
    spectateSecret: 'look',
assets: { 
      large_image: '465138072498208768', 
      large_text: 'Cosmoteer'
    },
    timestamps: { 
      start: Date.now()
    }, 
    party: {
    id: 'ae488379-351d-4a4f-ad32-2b9b01c91657',
    size: [8,8]
    },
    secrets: { 
    match: 'xyzzy', 
    join: 'join', 
    spectate: 'look'
    }
  }
});
console.log("Успешно!");
});
client.login(process.env.TOKEN)
