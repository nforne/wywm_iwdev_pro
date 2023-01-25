const pages = {...await import('./pages/index.js')}.pages;

const header = document.getElementById('header');
header.innerHTML = pages.navHeader;

const home = document.getElementById('container');
home.innerHTML = pages.home;

const footer = document.getElementById('footer');
footer.innerHTML = pages.navFooter;

const message = (text) => {
  const msg = document.getElementById('meassages');
  msg.innerHTML = `<span>${text}</span>`;
  setTimeout(() => {
    msg.innerHTML = '';
  }, 10000)
}

const aboutUs = () => {
  const homeBox = document.getElementById('homeBox');
  aboutUs.innerHTML = pages.aboutUs;
}

const slideR = () => {

}

const slideL = () => {
  
}

window.addEventListener('load', () => {
 
});

