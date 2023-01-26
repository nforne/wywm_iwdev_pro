const pages = {...await import('./pages/index.js')}.pages;
let slideTracker = [];

const header = document.getElementById('header');
header.innerHTML = pages.navHeader;

const container = document.getElementById('container');
container.innerHTML = pages.home;


const footer = document.getElementById('footer');
footer.innerHTML = pages.navFooter;

const message = (text) => {
  const msg = document.getElementById('messages');
  msg.innerHTML = `<div><p>${text}</p></div>`;
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
  } while (indexTracker.length <= 4);
  slideBox.innerHTML = slides;
}
slideLR();

// slide left and right event lister
const slideLRListener = () => {
  for (let slideBtn of [document.getElementById('slideL'), document.getElementById('slideR')]) {
    slideBtn.addEventListener('click', () => {
      message('Click on "SHOP" above to choose and add items to your shopping cart!')
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
  cntainer.innerHTML = pages.shop;
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
    message('Welcome Home!');
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
})

// aboutUs button and footer link event listeners
for (let abtUs of [document.getElementById('aboutUs'), document.getElementById('aboutUsF')])  {
  abtUs.addEventListener('click', () => {
    home(container);
    const homeBox = document.getElementById('homeBox');
    aboutUs(homeBox);
  })
};

// contactUs butten and footer link event listeners
for (let cntctUs of [document.getElementById('contactUs'), document.getElementById('contactUsF')]) {
  cntctUs.addEventListener('click', () => {
    contactUs(container);
  })
};

