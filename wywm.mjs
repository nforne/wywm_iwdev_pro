const pages = {...await import('./pages/index.js')}.pages;
let slideTracker = []; // to track for elimination of repeatition of slides on display

const header = document.getElementById('header');
header.innerHTML = pages.navHeader;

const container = document.getElementById('container');
container.innerHTML = pages.home;


const footer = document.getElementById('footer');
footer.innerHTML = pages.navFooter;

const message = (textsList, color='wheat') => {
  const msg = document.getElementById('messages');
  let txt = '';
  for (let text of textsList) { txt += `<p>${text}</p>`; };
  msg.innerHTML = `<div style="color:${color};">${txt}</div>`;
  setTimeout(() => {
    msg.innerHTML = '';
  }, 10000)
}

// to randomly but unrepeatedly load and run the home slides
const slideLR = () => {
  const slideBox = document.getElementById('itemCards')
  let slides = '';
  let indexTracker = [];
  do {
    const index = Math.floor(Math.random() * 9) + 1;
    if (!indexTracker.includes(index) && !slideTracker.includes(index)) {
      indexTracker.push(index)
      slides += `<img src="./pics/items/pic${index}.png" alt="pic${index}" srcset="./pics/items/pic${index}.png"> `
      if (indexTracker.length === 4) slideTracker = indexTracker;
    }
  } while (indexTracker.length <= 3);
  slideBox.innerHTML = slides;
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
    message(['Welcome Home!', 'Click on "SHOP" above to choose and add items to your shopping cart!'], 'greenyellow');
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

