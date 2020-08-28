/**
 * Use slimbot package to kick off a listener,
 * use phone user type anything bot will send back text
 */

const getWeatherInfo = require('./getWeather')


require('dotenv').config();
const TOKEN = process.env.TOKEN

const Slimbot = require('slimbot');
const slimbot = new Slimbot(TOKEN);
// Register listeners
slimbot.on('message', async message => {

  console.log(message.chat.id);  // 1048392852
  let info =  await getWeatherInfo()
  let msg = info
  slimbot.sendMessage(message.chat.id, msg)
  .then(msgObj => {
    console.log(msgObj);
  });
});

// Call API

slimbot.startPolling();