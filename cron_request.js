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


// for test: every 10 sec => */10 * * * * *
// at 22:00 =>0 0 22 * * *
// every morning 8 am => 0 0 8 * * *


let job = new CronJob('0 0 8 * * *', () => main(), null, true, 'Asia/Taipei');
job.start();