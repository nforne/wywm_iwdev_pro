// import { apiKey } from "./env.js";

const apiKey = require('./env.js')


const getProducts = async (url) => {
  return fetch(url)
  .then((data) => {
    console.log(JSON.stringify(data));
    // return data.json();
  });
}


// GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
// GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7

const urlPlatforms = `https://api.rawg.io/api/platforms?key=${apiKey}`;
const urlGames = `https://api.rawg.io/api/games?key=${apiKey}&dates=2019-09-01,2019-09-30&platforms=18,1,7`

console.log(urlGames)
console.log(urlPlatforms)

console.log('urlP',JSON.stringify(getProducts(urlPlatforms)));
console.log('urlG',JSON.stringify(getProducts(urlGames)));

