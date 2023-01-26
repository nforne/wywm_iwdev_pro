const pages = {...await import('./pages/index.js')}.pages;

const header = document.getElementById('header');
header.innerHTML = pages.navHeader;

const footer = document.getElementById('footer');
footer.innerHTML = pages.navFooter;

const container = document.getElementById('container');
container.innerHTML = pages.home;

const message = (text) => {
  console.log(text) // =======================
  const msg = document.getElementById('messages');
  msg.innerHTML = `<div><p>${text}</p></div>`;
  setTimeout(() => {
    msg.innerHTML = '';
  }, 10000)
}

const slideR = () => {

}

const slideL = () => {
  
}

const home = (cntainer) => {
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

// home button event listener
const hme = document.getElementById('home');
hme.addEventListener('click', () => {
  message('Welcome Home!');
  home(container);
})

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

