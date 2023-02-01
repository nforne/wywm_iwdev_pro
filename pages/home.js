
export const home = `

<span class="welcome">WELCOME</span>
<div id="homeBox" class="homeBox">

  <!--<div class="homeImgs">
    <img class="gothicLine" src="./pics/gothicLine.png" alt="gothicLine" srcset="./pics/gothicLine.png">
    <img class="q2Logo" src="./pics/Q2.png" alt="q2Logo" srcset="./pics/Q2.png">
    <span class="welcome">OUR OCCUPATION?</span>
    <span class="welcome">QUALITY & QUANTITY FOR YOU!</span>
    <img class="gothicLine" src="./pics/gothicLine.png" alt="gothicLine" srcset="./pics/gothicLine.png">
  </div>-->

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

      <div class="cartItemsBox">
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

        <hr class="line0">

        <div class="cartIem">
          <div class="itemValuesAndCRUDs">

            <div class="itemValues">
              <div class='cartFirstAttr'>
                <a href="#"><span>Item: &nbsp; ITEM1</span></a>
              </div>
              <div>
                <span>$14.95</span>
              </div>
              <div>
                <span>1</span>
              </div>
            </div>
            <hr class="lineB">
            <div class='cartCRUDBtns'>
              <button style="background-color: rgb(128, 62, 62); color: white;"> [&nbsp;🗑️&nbsp;] </button>
              <button> [&nbsp;💾&nbsp;] </button>
              <button> [&nbsp;🤍&nbsp;] </button>
            </div>
            
          </div>

          <div class="addSubBtns">
            <button id="addItem2" style="background-color: green;">[&nbsp; ➕ Q &nbsp;]</button>           
            <button id="subItem2" style="background-color: rgb(128, 62, 62);">[&nbsp; ➖ Q &nbsp;]</button>
          </div>

        </div>

        <hr class="lineB">

        <div class="cartIem">
          <div class="itemValuesAndCRUDs">

            <div class="itemValues">
              <div class='cartFirstAttr'>
                <span>ITEM2</span>
              </div>
              <div>
                <span>$14.95</span>
              </div>
              <div>
                <span>2</span>
              </div>
            </div>
          <hr class="lineB">
            <div class='cartCRUDBtns'>
              <button style="background-color: rgb(128, 62, 62); color: white;"> [&nbsp;🗑️&nbsp;] </button>
              <button> [&nbsp;💾&nbsp;] </button>
              <button> [&nbsp;🤍&nbsp;] </button>
            </div>
            
          </div>

          <div class="addSubBtns">
            <button id="addItem2" style="background-color: green;">[&nbsp; ➕ Q &nbsp;]</button>           
            <button id="subItem2" style="background-color: rgb(128, 62, 62);">[&nbsp; ➖ Q &nbsp;]</button>
          </div>

        </div>

        <hr class="lineA">
        
        <div class="total">
          <div id='totalL'>TOTAL</div>
          <div id="total">$25.95</div>
        </div>

        <hr class="lineA">

        <div class="cartCheckoutBtn">
        <div class="checkoutCRUDs">
          <button id='checkoutCloseBtn' style="background-color: rgb(128, 62, 62); color: white;"> [&nbsp; ✖ &nbsp;] | close!</button>
          <button> [&nbsp; 💾 &nbsp;] | Saved!</button>
          <button> [&nbsp; 🤍 &nbsp;] | Favorites!</button>
        </div>
        <button><i class="fa fa-credit-card-alt fa-2x" aria-hidden="true"></i> | Continue to Checkout!</button>
        </div>

      </div>
    </div>
  </div>


  <!--2------------------------------------------------------------------------->

</div>

<hr class="line3">

<div class="itemCardSlide">
  <i id='slideL' class="fa fa-chevron-circle-left fa-5x" aria-hidden="true"></i>
  <div id="itemCards" class="itemCards">
    <!-- make a slide show of available item pictures -->
    <img src="./pics/items/pic1.png" alt="pic1" srcset="./pics/items/pic1.png">
    <img src="./pics/items/pic2.png" alt="pic2" srcset="./pics/items/pic2.png">
    <img src="./pics/items/pic3.png" alt="pic3" srcset="./pics/items/pic3.png">
    <img src="./pics/items/pic4.png" alt="pic4" srcset="./pics/items/pic4.png">
  </div>
  <i id='slideR' class="fa fa-chevron-circle-right fa-5x" aria-hidden="true"></i>
</div>

`
