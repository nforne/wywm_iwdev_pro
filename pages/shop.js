import { itemCard } from './itemCard.js';

export const shop = () => {

  return ` <div class="shop">
              <span>GOLD</span>
              <img src="../pics/gothicLine.png" alt="gothicLine">
              <div id="gold" class="gold">
                <div class="H">
                <i class="fa fa-chevron-circle-left fa-5x sLeft" aria-hidden="true"></i>
                  ${itemCard()}
                  <i class="fa fa-chevron-circle-right fa-5x sRight" aria-hidden="true"></i>
                </div>
                <div class="H">
                <i class="fa fa-chevron-circle-left fa-5x sLeft" aria-hidden="true"></i>
                  ${itemCard()}
                  <i class="fa fa-chevron-circle-right fa-5x sRight" aria-hidden="true"></i>
                </div>      
              </div>
          
              <span>SILVER</span>
              <img src="../pics/gothicLine.png" alt="gothicLine">
              <div id="silver" class="silver">
                <div class="H">
                <i class="fa fa-chevron-circle-left fa-5x sLeft" aria-hidden="true"></i>
                  ${itemCard()}
                  <i class="fa fa-chevron-circle-right fa-5x sRight" aria-hidden="true"></i>
                </div>
                <div class="H">
                <i class="fa fa-chevron-circle-left fa-5x sLeft" aria-hidden="true"></i>
                  ${itemCard()}
                  <i class="fa fa-chevron-circle-right fa-5x sRight" aria-hidden="true"></i>
                </div>
              </div>
          
              <span>PREMIUM</span>
              <img src="../pics/gothicLine.png" alt="gothicLine">
              <div id="premium" class="premium">
                <div class="H">
                <i class="fa fa-chevron-circle-left fa-5x sLeft" aria-hidden="true"></i>
                  ${itemCard()}
                  <i class="fa fa-chevron-circle-right fa-5x sRight" aria-hidden="true"></i>
                </div>
                <div class="H">
                <i class="fa fa-chevron-circle-left fa-5x sLeft" aria-hidden="true"></i>
                  ${itemCard()}
                  <i class="fa fa-chevron-circle-right fa-5x sRight" aria-hidden="true"></i>
                </div>
              </div>
        </div> `

} 