
export const checkoutItems = (data) => {

  let items = "";
  let total = 0;
  const line = '<hr class="lineB">';

  for (let i = 0; i < data.length; i++) {
    total += Number(data[i].price) * Number(data[i].quantity);
    const item = `   
      
      <div class="checkoutItem">
        <div class='checkoutItemName'>
          <img src="./pics/items/pic${data[i].item.slice(3)}.png" alt="pic${data[i].item.slice(3)}" srcset="./pics/items/pic${data[i].item.slice(3)}.png">
          <a href="#"><span>Item: &nbsp; ${data[i].item.toUpperCase()}</span></a>
        </div>
        <div class='checkoutFirstAttr'>
          <span>$${(Number(data[i].item.slice(3)) * 55.5).toFixed(2)}</span>
        </div>
        <div>
          <span >${data[i].quantity}</span>
        </div>
        <div>
          <span >$${(Number(data[i].price) * Number(data[i].quantity)).toFixed(2)}</span>
        </div>
      </div>  ` ;

    if (i === data.length -1) {
      items += item;
    } else {
      items += item + line;
    }

  }

  return {items, total};

}

