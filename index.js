const Slimbot = require('slimbot');
const TOKEN = process.env.TOKEN


const slimbot = new Slimbot(TOKEN);

// Register listeners

slimbot.on('message', message => {
  slimbot.sendMessage(message.chat.id, 'Message received');
});

// Call API

slimbot.startPolling();