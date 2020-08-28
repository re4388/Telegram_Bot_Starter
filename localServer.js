
/**
 * Locally webserver to handle request and send message to telegram
 */
const getWeatherInfo = require('./getWeather')
const bodyParser = require('body-parser');
const axios = require('axios');
const express = require('express');
const port = 3000

require('dotenv').config();
const BOT_TOKEN = process.env.TOKEN


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.get('/send', async (req, res) => {

  let info =  await getWeatherInfo();

  axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    chat_id: `1048392852`,
    text: info
  });
  res.send('send message');
});

/* you can open this webserver..then if you can request /send endpoint, Bot will send msg */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})