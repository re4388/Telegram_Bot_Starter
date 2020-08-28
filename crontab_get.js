/**
 * run this file let you send message to you telegram by schedule
 */


var CronJob = require('cron').CronJob;
const axios = require('axios').default;


function main() {
  axios.get(`http://localhost:3000/send`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      console.log(`always executed`);
    });

}


let job = new CronJob('*/10 * * * * *', () => main(), null, true, 'Asia/Taipei');
job.start();