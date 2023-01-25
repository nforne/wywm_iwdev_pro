const pages = {...await import('./pages/index.js')}.pages;

const header = document.getElementById('header');
header.innerHTML = pages.navHeader;

const footer = document.getElementById('footer');
footer.innerHTML = pages.navFooter;
console.log(pages.navFooter)

window.addEventListener('load', () => {
 
});

