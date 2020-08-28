
/**
 * Use telegram-bot-api package to kick off a listener,
 * use phone user type anything bot will send send back text, link and gif
 */

const TG = require('telegram-bot-api')
require('dotenv').config();
const fs = require('fs')
const path = require('path')

const BOT_TOKEN = process.env.TOKEN
if (!BOT_TOKEN) {
  console.log('Ops, you need to define your BOT_TOKEN')
}

const api = new TG({
  token: BOT_TOKEN
})

api.setMessageProvider(new TG.GetUpdateMessageProvider())
api.start()
  .then(() => {
    console.log('API is started')
  })
  .catch(console.err)


/* begin to listen */
api.on('update', (update) => {
  const chat_id = update.message.chat.id

  // Send text message and URL link
  api.sendMessage({
    chat_id: chat_id,
    text: 'I got following message from you: *' + update.message.text + '*',
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: [
        [{
          text: 'Visit us!',
          url: 'https://github.com/mast/telegram-bot-api'
        }]
      ]
    }
  })

/* Send gif */
//   api.sendAnimation({
//     chat_id: chat_id,
//     caption: 'Shiny gif appeared..',
//     animation: fs.createReadStream(path.join(__dirname, './assets/celebi.gif'))
//   })
// })