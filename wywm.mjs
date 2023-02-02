const pages = {...await import('./pages/index.js')}.pages;
const { dialogFn, message } = pages.dialogsFns;

let slideTracker = []; // to track for elimination of repeatition of slides on display

// -----------------------------------------------------------------------------------
const print = (...args) => { //----------------------------------------------dev-t00ls
  console.log(...args);
}
// pages.dbRW.dbDelete(); // db flush
// -----------------------------------------------------------------------------------

$(window).ready(() => {

  const q2ShopSetTimeOuts = {}; // for short burst events like auto redirects
  
  const header = document.getElementById('header');
  header.innerHTML = pages.navHeader;

  const dialogMode = document.getElementById('dialog');
  
  const container = document.getElementById('container');
  container.innerHTML = pages.home;
  
  const footer = document.getElementById('footer');
  footer.innerHTML = pages.navFooter;

  // upon home load, default to shop if no acitvity in 5s
  q2ShopSetTimeOuts['A1'] = setTimeout(() => { 
    $("#shop").trigger("click");
  }, 5000);

  $(window).on('click', () => { // A##.. for all or global, S##.. for shop, .....
    if (q2ShopSetTimeOuts['A1']) clearTimeout(q2ShopSetTimeOuts['A1']);
  })

  // to notify if there are items in the cart or not
  const cartData = pages.dbRW.dbRead(message);
  if (Object.keys(cartData).length > 0) {
    $('#cartCount').html(Object.keys(cartData).length).css('visibility', 'visible');
  } else {
    $('#cartCount').css('visibility', 'hidden');
  }  
  
  // to randomly but unrepeatedly load and run the home slides
  const slideLR = () => {
    const slideBox = document.getElementById('itemCards');
    let slides = '';
    let indexTracker = [];
    do {
      const index = Math.floor(Math.random() * 25) + 1;
      if (!indexTracker.includes(index) && !slideTracker.includes(index)) {
        indexTracker.push(index)
        slides += `<img id="pic${index}" class="homeSlidesLR" src="./pics/items/pic${index}.png" alt="pic${index}" srcset="./pics/items/pic${index}.png"> `
        if (indexTracker.length === 4) slideTracker = indexTracker;
      }
    } while (indexTracker.length <= 3);
    slideBox.innerHTML = slides; 
    
    // to setup modal view for home pics
    const imgSlides = document.getElementsByClassName('homeSlidesLR');
    for (let imgSlide of imgSlides) {
      $(imgSlide).on('click', () => {
        const dialog = `
          <dialog id="dialogBox" class="dialogBox"> 
            <img id="${imgSlide.id}" class="homeSlidesLR" src="./pics/items/${imgSlide.id}.png" alt="${imgSlide.id}" srcset="./pics/items/${imgSlide.id}.png"> 
          </dialog> `
        dialogMode.innerHTML = dialog; 

        dialogFn(imgSlide.id);

      })
    }

  }
  slideLR();

  
  // slide left and right event listener for home and aboutUs carousel
  const slideLRListener = () => {
    $('#slideL, #slideR').on('click', () => {
      if (Object.keys(pages.dbRW.dbRead(message)).length === 0) {
        message(['Click on "SHOP" above to choose and add items to your shopping cart!'])
      }
      slideLR();
    }) 
  }
  slideLRListener();
  
  // methods to unboard the different views
  function home(cntainer) {
    cntainer.innerHTML = pages.home;
  }
  
  const shop = (cntainer) => {
    cntainer.innerHTML = pages.shop();
  }
  
  const aboutUs = (homeBox) => {
    homeBox.innerHTML = pages.aboutUs;
  }
  
  const contactUs = (cntainer) => {  
    cntainer.innerHTML = pages.contactUs;
  }
  
  // home button and logo event listeners
  $('#logo, #home').on('click', () => {
    if (Object.keys(pages.dbRW.dbRead(message)).length === 0) {
      message(['Welcome Home!', 'Click on "SHOP" above to choose and add items to your shopping cart!'], 'rgb(247, 239, 229)', 5000);
    }
    home(container);
    slideLR();

    // slide left and right event listener
    slideLRListener();
  })
  
  // Fn to add addToCart click listers to shop items add to cart buttons
  const addToCartClickListener = (item) => {
    $(`#addToCart${item.id.slice(4)}`).on('click', () => {
      const db = pages.dbRW.dbRead(message); 
      if (db && db[`pic${item.id.slice(4)}`]) { // search db to eliminate duplication and avoid errors
        message([`Item: PIC${item.id.slice(4)} is already in the Cart.`, 'You can add the +quantity when you get to the cart for checkout!'], 'wheat', 3000);
      } else {
        db[`pic${item.id.slice(4)}`] = new pages.dbRW.dbItemClass(`pic${item.id.slice(4)}`, `${Number(item.id.slice(4)) * 55.5}`, 1);
        pages.dbRW.dbWrite(db, message);
        $('#cartCount').html(Number($('#cartCount').html()) + 1).css('visibility', 'visible');
      }
    })
  }

  // Fn for modal view of shop items 
  const shopItemListener = () => {
    const items = document.getElementsByClassName('item');
    for (let item of items) {
      $(item).on('dblclick', () => {
        dialogMode.innerHTML = `<dialog id="dialogBox" class="dialogBox"> ${pages.itemCard(item.id.slice(4))} </dialog> `;
        addToCartClickListener(item);
        dialogFn(item.id);
      })

      $(item).on('click', () => {
        const index = Math.floor(Math.random() * 3) + 1;
        index === 3 ? message(['Double click to zoom-in on item!']) : "";
      })
    }

  };
  
  // shop button event listener
  $('#shop').on('click', () => {
    shop(container);
    
    message(['Double click to zoom-in on item!'], 'wheat', 5000);

    // to enable dialog for all shop items
    shopItemListener();

    // event listeners for sLeft and sRight on shop
    const shopLR = [document.getElementsByClassName('sLeft'), document.getElementsByClassName('sRight')]
    for (let i = 0; i < 6; i++ ) {
      for (let sLR of [shopLR[0][i], shopLR[1][i]]) {
        sLR.addEventListener('click', () => {
          const H = document.getElementById(`sH${i+1}`);
          H.innerHTML = pages.itemCard();
          
          // to rehook addToCart event listeners to all shop items
          const items = document.getElementsByClassName('item');
          for (let item of items) {
            $(item).on('click', () => {
              addToCartClickListener(item);
            })
          }
          
          // to reenable dialog for all shop items
          shopItemListener();
        })
      }
    }

    

    // addToCart click listener
    const shopItems = document.getElementsByClassName('item') ?? [];
    for (let item of shopItems) {    
      addToCartClickListener(item);      
    }

  })
  
  // aboutUs button and footer link event listeners
  $('#aboutUs, #aboutUsF').on('click', () => {
    home(container);
    const homeBox = document.getElementById('homeBox');
    aboutUs(homeBox);
    slideLR();
    slideLRListener();
  });
  
  // contactUs butten and footer link event listeners
  $('#contactUs, #contactUsF').on('click', () => {
    contactUs(container);
  })
  

  // for cart button click listener
  const calculateTotal = () => {
    let total = 0;
    const cartItems = Object.values(pages.dbRW.dbRead(message) ?? {});
    if (pages.dbRW.dbRead(message) && cartItems.length > 0) {
      for (let cartItem of cartItems) {
        total += Number(cartItem.price) * Number(cartItem.quantity);
      }
    }
    return total;
  }

  // shopping cart click listener
  $('#shoppingCartBtn, #shopnCartBBtn').on('click', () => {
    const cartDataList = Object.values(pages.dbRW.dbRead(message));

    if (cartDataList.length === 0 ) {
      message(['Your cart is empty.', 'Lets go pickup some items!'], 'wheat', 5000);
      // $('#dialog').html(`<dialog id="dialogBox" class="dialogBox">${pages.shoppingCart(cartDataList)}</dialog> `); // ============= ft. dev in progress
      // dialogFn('Q2-Shop! | CART')
      q2ShopSetTimeOuts['S1'] = setTimeout(() => {
        $("#shop").trigger("click");
      }, 5000);
      // return ;
    }

    home(container);
    slideLR();
    slideLRListener();
    $('#homeBox').html(pages.shoppingCart(cartDataList));

    if (cartDataList.length !== 0) message(['Double click on item to zoom-in on it!'], 'wheat', 5000);

    const cartItems = document.getElementsByClassName('cartIem') ?? [];
    for (let cartIem of cartItems) {
      // dialog view listener
      $(`#itemValuesAndCRUDs${cartIem.id.slice(10)}`).on('click', () => {
        $('#dialog').html(`<dialog id="dialogBox" class="dialogBox"> ${pages.itemCard(Number(cartIem.id.slice(10)))} </dialog> `);
        dialogFn(cartIem.id.slice(7));
      })
      
      // random directive message  
      $(`#itemValuesAndCRUDs${cartIem.id.slice(10)}`).on('click', () => {
        const index = Math.floor(Math.random() * 5) + 1;
        index === 3 ? message(['Double click on item to zoom-in on it'],'wheat', 5000) : "";
      })

      // delete item from cart
      $(`#cartItem${cartIem.id.slice(10)}`).on('click', () => {
        const cartDB = {...pages.dbRW.dbRead(message)};

        const priorCartDBLength = Object.keys(cartDB).length;
        delete cartDB[cartIem.id.slice(7).toLowerCase()];

        if (Object.keys(cartDB).length > 0) {
          pages.dbRW.dbWrite(cartDB, message);
          $('#cartCount').html(Object.keys(cartDB).length);

        } else {
          pages.dbRW.dbDelete();
          $('#cartCount').html(0).css('visibility', 'hidden');
          message(['Oops! Your cart is empty.', 'Lets go pickup some items'])
          $('#cartChkOutBtn').html('<i class="fa fa-credit-card-alt fa-1x" aria-hidden="true"></i> | "Continue Shopping!"');
          
          q2ShopSetTimeOuts['S1'] = setTimeout(() => {
            $("#shop").trigger("click");
          }, 5000);

        }

        if ($(`#${cartIem.id}`).index() - 2 === priorCartDBLength - 1) {
          $(`#${cartIem.id}`).remove();
        } else {
          $('.cartItemsBox').children().eq($(`#${cartIem.id}`).index() + 1).remove();
          $(`#${cartIem.id}`).remove();
        }

        $('#total').html(`$${calculateTotal()}`);
      })

      // For +/- cart items buttons click listeners
      const addSubBtns = (a/* 0 ?? 1 */, cartItemID) => {
        const id = cartItemID.slice(7).toLowerCase();
        const cartDB = pages.dbRW.dbRead(message);
        if (a === 0 && cartDB[id].quantity === 1) {
          message(['That is the least of the item quantity you can get!']);
        } else if (cartDB[id].quantity >= 1) {
          a === 0 ? cartDB[id].quantity -= 1 : cartDB[id].quantity += 1; 
        }       
        pages.dbRW.dbWrite(cartDB, message);
        $(`#cartItemQty${cartItemID.slice(10)}`).html(Number(cartDB[id].quantity));
        $('#total').html(`$${calculateTotal()}`);
      }
    
      $(`#add${cartIem.id.slice(7).toUpperCase()}`).on('click', () => {
        addSubBtns(1, cartIem.id);
      })
      $(`#sub${cartIem.id.slice(7).toUpperCase()}`).on('click', () => {
        addSubBtns(0, cartIem.id);
      })

      // close cart session 
      $('#checkoutCloseBtn, shopnCartBBtn').on('click', () => {
        home(container);
        slideLR();
        slideLRListener();
        message(['Thank you for your buisness! 📝',  'Come back soon!'])
      })
    }
  
    $('#cartChkOutBtn').on('click', () => {
      if (Object.keys(pages.dbRW.dbRead(message)).length === 0) {
        message(['Your cart is empty.', 'Lets go pickup some items!'])
        if (q2ShopSetTimeOuts['S1']) clearTimeout(q2ShopSetTimeOuts['S1']);
        $("#shop").trigger("click");
      }
    })
  
  })
    
  
 
})


