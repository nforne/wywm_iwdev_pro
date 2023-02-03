import { checkoutItems } from "./checkoutItems.js";

export const checkout = (data) => {

  const checkouts = checkoutItems(data);
  return `
  
  <!--1------------------------------------------------------------------------->
  
<img class="gothicLine" src="./pics/gothicLine.png" alt="gothicLine" srcset="./pics/gothicLine.png">
<div id="shoppingCart" class="shoppingCart">
    <div class="cartTop">
      <img class="q2Logo" src="./pics/Q2.png" alt="q2Logo" srcset="./pics/Q2.png">
      <div class="cartTopR">
        <span>Q2-Shop! &nbsp;  | &nbsp; CHECKOUT</span>
        <!-- <i class="fa fa-times fa-2x" aria-hidden="true"></i> -->
      </div>
    </div>

    <hr class="lineA">

    <div class="cartItemsBox">

      <div id='checkoutItemTop' class="checkoutItem">
        <div class='cartFirstAttr'>
          <span>[ Name ]</span>
        </div>
        <div>
          <span>[ U-Price ] </span>
        </div>
        <div>
          <span>[ Qty(Q) ]</span>
        </div>
        <div>
          <span>[ S-Total ]</span>
        </div>
      </div>

      <hr class="line0">

      ${checkouts.items}

      <hr class="lineA">
      
      <div class="total">
        <div id='totalC'>TOTAL</div>
        <div id="total">$${checkouts.total}</div>
      </div>

      <hr class="lineA">

      <div class="ChkOutBtn">
        <button id="ChkOutBtn"><i class="fa fa-credit-card-alt fa-1x" aria-hidden="true"></i> | Preceed to Payment!</button>
      </div>

    </div>
  </div>
</div>

<!--2------------------------------------------------------------------------->
  
  `;
} 
