const getJSON = require("async-get-json")
const moment = require('moment')
require('dotenv').config();


async function getWeather(){
  const APIKEY = process.env.OPEN_WEATHER_API;
  const lat = `25.033`;
  const lon = `121.517`;
  const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`
  const result = await getJSON(URL)

  const tempOffset = -272.15
  let output = ``;

  let temp = `${Math.round(Number(result.main.temp) + tempOffset)}°C \n`
  let desc = `Weather: ${result.weather[0].description}\n`
  let dt = moment.unix(result.dt).locale('zh-tw').format("YYYY-MM-DD HH:mm a")

  output += temp
  output += desc
  output += dt
  console.log(output);
  return output
}

// getWeather()

module.exports = getWeather