import { cartElements } from "./cartItems.js";

export const shoppingCart = (dataList) => {

  let total = 0;
  let cartItems = '';
  for (let i = 0; i < dataList.length; i++) {
    if (i === dataList.length - 1) {
      cartItems += cartElements.cartItem(dataList[i])
    } else {
      cartItems += cartElements.cartItem(dataList[i]) + cartElements.line;
    }
    total += dataList[i].price * dataList[i].quantity;
  }

  return `
   
   <!--1------------------------------------------------------------------------->
  
  <img class="gothicLine" src="./pics/gothicLine.png" alt="gothicLine" srcset="./pics/gothicLine.png">
  <div id="shoppingCart" class="shoppingCart">
      <div class="cartTop">
        <img class="q2Logo" src="./pics/Q2.png" alt="q2Logo" srcset="./pics/Q2.png">
        <div class="cartTopR">
          <span>Q2-Shop! &nbsp;  | &nbsp; CART</span>
          <!-- <i class="fa fa-times fa-2x" aria-hidden="true"></i> -->
        </div>
      </div>

      <hr class="lineA">

      <div class="cartItemsBox bg-dark">
        <div class="cartItemsHeader">
          <div class='cartFirstAttr'>
            <span>[ Name ]</span>
          </div>
          <div>
            <span>[ Unit Price ] </span>
          </div>
          <div>
            <span>[ Quantity(Q) ]</span>
          </div>
          <div>
            <span>[ + Quantity ]</span>
          </div>
          <div>
            <span>[ - Quantity ]</span>
          </div>
        </div>

        <div class="cartPhoneHeader">
          <div class='cartFirstAttr'>
            <span>[ Name ]</span>
          </div>
          <div>
            <span>[ U-Price ] </span>
          </div>
          <div>
            <span>[ Qty(Q) ]</span>
          </div>
        </div>

        <hr class="line0">

        ${cartItems}

        <hr class="lineA">
        
        <div class="total">
          <div id='totalL'>TOTAL</div>
          <div id="total">$${(total > 0 ?  total : 0).toFixed(2)}</div>
        </div>

        <hr class="lineA">

        <div class="cartCheckoutBtn">
          <div class="checkoutCRUDs">
            <button id='checkoutCloseBtn' style="background-color: rgb(128, 62, 62); color: white;"> [&nbsp; ✖ &nbsp;] | close!</button>
            <button> [&nbsp; 💾 &nbsp;] | Saved!</button>
            <button> [&nbsp; 🤍 &nbsp;] | Favorites!</button>
          </div>
          <button id="cartChkOutBtn"><i class="fa fa-credit-card-alt fa-1x" aria-hidden="true"></i> | ${dataList.length > 0 ? "Continue to Checkout!" : "Continue Shopping!"}</button>
        </div>

      </div>
    </div>
  </div>
  
  <!--2------------------------------------------------------------------------->
   
   `;

  
}