import { itemCard } from './itemCard.js';

export const shop = () => {

  return ` <div class="shop">
              <span>GOLD</span>
              <img class="gothicLine" src="./pics/gothicLine.png" alt="gothicLine">
              <div id="gold" class="gold">
                <div class="H">
                  <i class="fa fa-chevron-circle-left fa-5x sLeft" aria-hidden="true"></i>
                    <div id="sH1" class="H sH1">
                      ${itemCard()}
                    </div>
                  <i class="fa fa-chevron-circle-right fa-5x sRight" aria-hidden="true"></i>
                </div>
                <div class="H">
                  <i class="fa fa-chevron-circle-left fa-5x sLeft" aria-hidden="true"></i>
                  <div id="sH2" class="H sH2">
                    ${itemCard()}
                  </div>
                  <i class="fa fa-chevron-circle-right fa-5x sRight" aria-hidden="true"></i>
                </div>      
              </div>
          
              <span>SILVER</span>
              <img class="gothicLine" src="./pics/gothicLine.png" alt="gothicLine">
              <div id="silver" class="silver">
                <div class="H">
                  <i class="fa fa-chevron-circle-left fa-5x sLeft" aria-hidden="true"></i>
                  <div id="sH3" class="H sH3">
                    ${itemCard()}
                  </div>  
                  <i class="fa fa-chevron-circle-right fa-5x sRight" aria-hidden="true"></i>
                </div>
                <div class="H">
                  <i class="fa fa-chevron-circle-left fa-5x sLeft" aria-hidden="true"></i>
                    <div id="sH4" class="H sH4">
                      ${itemCard()}
                    </div>
                  <i class="fa fa-chevron-circle-right fa-5x sRight" aria-hidden="true"></i>
                </div>
              </div>
          
              <span>PREMIUM</span>
              <img class="gothicLine" src="./pics/gothicLine.png" alt="gothicLine">
              <div id="premium" class="premium">
                <div class="H">
                  <i class="fa fa-chevron-circle-left fa-5x sLeft" aria-hidden="true"></i>
                  <div id="sH5" class="H sH5">
                    ${itemCard()}
                  </div>
                  <i class="fa fa-chevron-circle-right fa-5x sRight" aria-hidden="true"></i>
                </div>
                <div class="H">
                  <i class="fa fa-chevron-circle-left fa-5x sLeft" aria-hidden="true"></i>
                    <div id="sH6" class="H sH6">
                      ${itemCard()}
                    </div>
                  <i class="fa fa-chevron-circle-right fa-5x sRight" aria-hidden="true"></i>
                </div>
              </div>
        </div> `

} 