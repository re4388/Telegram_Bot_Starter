/**
 * Use slimbot package to kick off a listener,
 * use phone user type anything bot will send back text
 */


require('dotenv').config();
const TOKEN = process.env.TOKEN

const Slimbot = require('slimbot');
const slimbot = new Slimbot(TOKEN);

// Register listeners
slimbot.on('message', message => {
  console.log(message.chat.id);  // 1048392852

  const msg =`Message received`
  slimbot.sendMessage(message.chat.id, 'Message received')
  .then(msgObj => {
    console.log(msgObj);
  });
});

// Call API

slimbot.startPolling();