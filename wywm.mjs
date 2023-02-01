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
  
  const header = document.getElementById('header');
  header.innerHTML = pages.navHeader;

  const dialogMode = document.getElementById('dialog');
  
  const container = document.getElementById('container');
  container.innerHTML = pages.home;
  
  const footer = document.getElementById('footer');
  footer.innerHTML = pages.navFooter;

  // to notify if there are items in the cart or not
  const cartData = pages.dbRW.dbRead(message) ?? {};
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
    for (let slideBtn of [document.getElementById('slideL'), document.getElementById('slideR')]) {
      slideBtn.addEventListener('click', () => {
        if (Object.keys(pages.dbRW.dbRead(message) ?? {}).length === 0) {
          message(['Click on "SHOP" above to choose and add items to your shopping cart!'])
        }
        slideLR();
      })
    }
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
  for (let hme of [document.getElementById('logo'), document.getElementById('home')]) {
    hme.addEventListener('click', () => {
      if (Object.keys(pages.dbRW.dbRead(message) ?? {}).length === 0) {
        message(['Welcome Home!', 'Click on "SHOP" above to choose and add items to your shopping cart!'], 'rgb(247, 239, 229)', 5000);
      }
      home(container);
      slideLR();
  
      // slide left and right event listener
      slideLRListener();
    })
  }
  
  // Fn to add addToCart click listers to shop items add to cart buttons
  const addToCartClickListener = (item) => {
    $(`#addToCart${item.id.slice(4)}`).on('click', () => {
      const db = pages.dbRW.dbRead(message) ?? {}; 
      if (db && db[`pic${item.id.slice(4)}`]) { // search db to eliminate duplication and avoid errors
        message([`Item: PIC${item.id.slice(4)} is already in the Cart.`, 'You can add the +quantity when you get to the cart for checkout!'])
      } else {
        db[`pic${item.id.slice(4)}`] = new pages.dbRW.dbItemClass(`pic${item.id.slice(4)}`, `${Number(item.id.slice(4)) * 55.5}`, 1);
        pages.dbRW.dbWrite(db, message);
        $('#cartCount').html(Number($('#cartCount').html()) + 1 )
        $('#cartCount').css('visibility', 'visible');
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
  const shp = document.getElementById('shop');
  shp.addEventListener('click', () => {
    shop(container);
    // event listeners for sLeft and sRight on shop
    const shopLR = [document.getElementsByClassName('sLeft'), document.getElementsByClassName('sRight')]
    for (let i = 0; i < 6; i++ ) {
      for (let sLR of [shopLR[0][i], shopLR[1][i]]) {
        sLR.addEventListener('click', () => {
          const H = document.getElementById(`sH${i+1}`);
          H.innerHTML = pages.itemCard();
          shopItemListener();
        })
      }
    }

    shopItemListener();

    // addToCart click listener
    const shopItems = document.getElementsByClassName('item') ?? [];
    for (let item of shopItems) {    
      addToCartClickListener(item);      
    }

  })
  
  // aboutUs button and footer link event listeners
  for (let abtUs of [document.getElementById('aboutUs'), document.getElementById('aboutUsF')])  {
    abtUs.addEventListener('click', () => {
      home(container);
      const homeBox = document.getElementById('homeBox');
      aboutUs(homeBox);
      slideLR();
      slideLRListener();
    })
  };
  
  // contactUs butten and footer link event listeners
  for (let cntctUs of [document.getElementById('contactUs'), document.getElementById('contactUsF')]) {
    cntctUs.addEventListener('click', () => {
      contactUs(container);
    })
  };

  // cart button click listener
  const calculateTotal = () => {
    let total = 0;
    const cartItems = Object.values(pages.dbRW.dbRead(message))
    if (pages.dbRW.dbRead(message) && cartItems.length > 0) {
      for (let cartItem of cartItems) {
        total += Number(cartItem.price) * Number(cartItem.quantity);
      }
    }
    return total;
  }

  $('#shoppingCartBtn').on('click', () => {
    const cartDataList = Object.values(pages.dbRW.dbRead(message) ?? {});
    home(container);
    slideLR();
    slideLRListener();
    $('#homeBox').html(pages.shoppingCart(cartDataList));
    const cartItems = document.getElementsByClassName('cartIem') ?? [];
    for (let cartIem of cartItems) {
      // dialog view listener
      $(`#${cartIem.id}`).on('click', () => {
        $('#dialog').html(`<dialog id="dialogBox" class="dialogBox"> ${pages.itemCard(Number(cartIem.id.slice(10)))} </dialog> `);
        dialogFn(cartIem.id.slice(7));
      })
      // delete item from cart
      $(`#cartItem${cartIem.id.slice(10)}`).on('click', () => {
        let cartDBNum = 0;
        const cartDB = {...pages.dbRW.dbRead(message)};
        cartDBNum = Object.keys(cartDB).length;
        delete cartDB[cartIem.id.slice(7).toLowerCase()];
        if (Object.keys(cartDB).length > 0) {
          pages.dbRW.dbWrite(cartDB, message);
        } else {
          pages.dbRW.dbDelete();
          home(container);
          slideLR();
          slideLRListener();
          message(['Oops! Your cart is empty.', 'Lets go pickup some items'])
          $('#cartCount').html(0)
          $('#cartCount').css('visibility', 'hidden');
        }

        if ($(`#${cartIem.id}`).index() - 2 === cartDBNum - 1) {
          $(`#${cartIem.id}`).remove();
        } else {
          $('.cartItemsBox').children().eq($(`#${cartIem.id}`).index() + 1).remove();
          $(`#${cartIem.id}`).remove();
        }
        
        $('#total').html(`$${calculateTotal()}`);
      })
    
      $().on('click', () => {
    
      })
    }
  
  
  })
    
  
 

})


