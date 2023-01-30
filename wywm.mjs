const pages = {...await import('./pages/index.js')}.pages;
let slideTracker = []; // to track for elimination of repeatition of slides on display

$(document).ready(() => {
  
  const header = document.getElementById('header');
  header.innerHTML = pages.navHeader;
  
  const container = document.getElementById('container');
  container.innerHTML = pages.home;
  
  const footer = document.getElementById('footer');
  footer.innerHTML = pages.navFooter;
  
  const message = (textsList, color='wheat', time=10000) => {
    const msg = document.getElementById('messages');
    let txt = '';
    for (let text of textsList) { txt += `<p>${text}</p>`; };
    msg.innerHTML = `<div style="color:${color};">${txt}</div>`;
    setTimeout(() => {
      msg.innerHTML = '';
    }, time)
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

    const dialogMode = document.getElementById('dialog');
    const imgSlides = document.getElementsByClassName('homeSlidesLR');
    for (let imgSlide of imgSlides) {
      $(imgSlide).on('click', () => {
        dialogMode.innerHTML = '';
        const dialog = `
          <dialog id="dialogBox" class="dialogBox"> 
            <img id="${imgSlide.id}" class="homeSlidesLR" src="./pics/items/${imgSlide.id}.png" alt="${imgSlide.id}" srcset="./pics/items/${imgSlide.id}.png"> 
          </dialog> `
        dialogMode.innerHTML = dialog; 

        $( "#dialogBox" ).dialog({  
          autoOpen: false,
          closeonescape: true,
          // height: 700,
          with: 700,
          modal : true,
          clickOutside: true, // clicking outside the dialog will close it
			    clickOutsideTrigger: "#dialogBox",
          position: { my: "center", at: "center", of: window },
          hide: { effect: "blind", duration: 100 },  
          show : { effect: "blind", duration: 100 },
          title : imgSlide.id.toUpperCase(),
          dialogClass: "dialogBoxBR",
          buttons: [{
              text: ` [ ✖ ] ➖ Close 💬 `,
              click: function () {                  
                $( this ).dialog( "destroy" );
              }}],
        });

        $( "#dialogBox" ).dialog( "open" );

        const index = Math.floor(Math.random() * 3) + 1;
        index === 3 ? message(['Press "ESCAPE" to close dialog box!']) : '';

        /* since the jq-ui dialog widget is blocking, we handle it 
        assynchronously to enable dialog close on clik anywhere else on the screen.
        */
        setTimeout(() => {
          $(window).on('click', () => {
            if ($("#dialogBox").data("ui-dialog")) {
              setTimeout(() => {
                $("#dialogBox").dialog("destroy");
                $(window).off('click');
              }, 0);
            }
          });
        }, 0)

        
        
      })
    }

  }
  slideLR();
  
  // slide left and right event lister
  const slideLRListener = () => {
    for (let slideBtn of [document.getElementById('slideL'), document.getElementById('slideR')]) {
      slideBtn.addEventListener('click', () => {
        message(['Click on "SHOP" above to choose and add items to your shopping cart!'])
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
      message(['Welcome Home!', 'Click on "SHOP" above to choose and add items to your shopping cart!'], 'rgb(247, 239, 229)', 5000);
      home(container);
      slideLR();
  
      // slide left and right event lister
      slideLRListener();
    })
  }
  
  // shop button event listener
  const shp = document.getElementById('shop');
  shp.addEventListener('click', () => {
    shop(container);
    // event listeners for sLeft and sRight
    const shopLR = [document.getElementsByClassName('sLeft'), document.getElementsByClassName('sRight')]
    for (let i = 0; i < 6; i++ ) {
      for (let sLR of [shopLR[0][i], shopLR[1][i]]) {
        sLR.addEventListener('click', () => {
          const H = document.getElementById(`sH${i+1}`);
          H.innerHTML = pages.itemCard();
        })
      }
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

})


