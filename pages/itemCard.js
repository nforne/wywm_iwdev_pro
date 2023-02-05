export const itemCard = (i='', numItems=4) => {
  let outPut = '';
  const indexTracker = [];

  while (indexTracker.length < (i ? 1 : numItems)) {

    const index = Math.floor(Math.random() * 25) + 1;
    const cart = `

      <div id='item${i ? i : index}' class="item">
        <div class="V1">
          <i class="fa fa-caret-left fa-5x" style="width: 20%;" aria-hidden="true"></i>
          <img class="q2Logo" src="./pics/Q2.png" alt="q2Logo" srcset="./pics/Q2.png">
          <div>
            <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
            <i class="fa fa-times fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      
        <div class="V2">
          <span>Item Name: Item PIC${i ? i : index}</span>
          <div>
            <span>[ Item found on www.example.com ] </span><br>
            <span> [ Picture ${i ? i : index} of 25 ] </span>
          </div>
        </div>
      
        <div class="V3">
          <i class="fa fa-chevron-left fa-4x" aria-hidden="true"></i>
          <div class="itemPic">
            <img src="./pics/items/pic${i ? i : index}.png" alt="pic${i ? i : index}" srcset="./pics/items/pic${i ? i : index}.png">
          </div>
          <i class="fa fa-chevron-right fa-4x" aria-hidden="true"></i>
        </div>
      
        <div class="V5">
            <span>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <span> $${((i ? i : index) * 55.5).toFixed(2)} | <a href="">Edit</a></span>
        </div>
      
        <div class="V6">
          <button id="addToCart${i ? i : index}"> <i class="fa fa-shopping-cart fa-1x" aria-hidden="true"></i> | Add to Cart</button>
          <button> <i class="fa fa-list fa-1x" aria-hidden="true"></i> | Add to Wish List</button>
          <button><i class="fa fa-pencil-square-o fa-1x" aria-hidden="true"></i> | Item Reviews</button>
        </div>
      
      </div>  `

    if (!indexTracker.includes(i ? i : index)) {
      indexTracker.push(i ? i : index)
      outPut += cart;
    } 
  }

  return outPut;

};

