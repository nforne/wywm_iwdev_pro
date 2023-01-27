export const itemCard = () => {
  let outPut = '';
  const indexTracker = [];

  while (indexTracker.length < 4) {

    const index = Math.floor(Math.random() * 25) + 1;
    const cart = `

      <div class="item">
        <div class="V1">
          <i class="fa fa-caret-left fa-2x" style="width: 20%;" aria-hidden="true"></i>
          <img class="q2Logo" src="../pics/Q2.jpg" alt="q2Logo" srcset="../pics/Q2.jpg">
          <div>
            <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
            <i class="fa fa-times fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      
        <div class="V2">
          <span>Item Name: Lorem</span>
          <div>
            <span>[ Item found on www.example.com ] </span>
            <span> [ Picture ${index} of 9 ] </span>
          </div>
        </div>
      
        <div class="V3">
          <i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
          <div class="itemPic">
            <img src="./pics/items/pic${index}.png" alt="pic${index}" srcset="./pics/items/pic${index}.png">
          </div>
          <i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>
        </div>
      
        <div class="V5">
            <span>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <span> $${index * 55.5} | <a href="">Edit</a></span>
        </div>
      
        <div class="V6">
          <button> <i class="fa fa-shopping-cart fa-1x" aria-hidden="true"></i> | Add to Cart</button>
          <button> <i class="fa fa-list fa-1x" aria-hidden="true"></i> | Add to Wish List</button>
          <button><i class="fa fa-pencil-square-o fa-1x" aria-hidden="true"></i> | Item Reviews</button>
        </div>
      
      </div>  `

    if (!indexTracker.includes(index)) {
      indexTracker.push(index)
      outPut += cart;
    }

  }

  return outPut;

};

