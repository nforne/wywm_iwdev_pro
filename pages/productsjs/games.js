const game = (data) => {
  return `
  
  <div id="${data.id}" class="game">
    <div class="gameHeader">
      <span>${data.name}</span>
    </div>
    <div class="gameBgPic">
      <img src="${data.background_image}" alt="${data.id}">
    </div>
    <div class="gameDetails">
      <div class=gDetailsKeys>
        <span>Date Released: </span>
        <span>Last Updated: </span>
        <span>One of Genres: </span>
      </div>
      <div class=gDetailsValues>
        <span>${data.released} </span>
        <span>${data.updated} </span>
        <span>${data.genre} </span>
      </div>
    </div>
  </div> `;
  
}

export const gameProducts = (gamesDataList) => {
  let outPut = '';
  for (let gameData of gamesDataList) {
    outPut += game(gameData);
  }
  return `
  
    <div class="products">
      <span class="welcome">PRODUCTS</span>
      <img class="gothicLine" src="./pics/gothicLine.png" alt="gothicLine">
      <div class="games bg-dark">
        ${outPut}
      </div>
    </div> `;
  
} 