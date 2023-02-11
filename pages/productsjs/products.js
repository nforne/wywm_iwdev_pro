import { apiKey } from "./env.js";
import { gameProducts } from './games.js';

// GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
// GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
// const url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2019-09-01,2019-09-30&platforms=18,1,${index}`;

export const getProducts = async () => {
  const gamesDataList = [];
  const pageNumber = Math.floor(Math.random() * 3) + 1;
  const url = `https://api.rawg.io/api/games?dates=2019-09-01,2019-09-30&key=${apiKey}&page=${pageNumber}&platforms=18,1,7`;
  const response = await fetch(url);
  const data = await response.json();
  const products = data["results"];
  for (let gameData of products) {
    const { name, released, genres, background_image, updated } = gameData;
    gamesDataList.push({
      id:`game${products.indexOf(gameData)}`, 
      name, released, genre: genres[0]['name'], 
      background_image, updated
    });
  }
  return gameProducts(gamesDataList);
};


