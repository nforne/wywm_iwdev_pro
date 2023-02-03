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
        <div>
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
        <div id="total">$${checkouts.total.toFixed(2)}</div>
      </div>

      <hr class="lineA">

      <div class="chkOutBtn">
        <button id="back2Cart"><i class="fa fa-shopping-cart fa-1x" aria-hidden="true"></i> <i class="fa fa-chevron-circle-left fa-1x" aria-hidden="true"></i></button>
        <div class='chkPaymentCardTypes'>
          <i class="fa fa-cc-visa fa-3x" aria-hidden="true"></i>
          <i class="fa fa-cc-mastercard fa-3x" aria-hidden="true"></i>
        </div>
        <button id="chkOutBtn"> <i class="fa fa-chevron-circle-right fa-1x" aria-hidden="true"></i> <i class="fa fa-credit-card-alt fa-1x" aria-hidden="true"></i> | Preceed to Payment!</button>
      </div>

    </div>
  </div>
</div>

<!--2------------------------------------------------------------------------->
  
  `;
} 
