// Initial Data
let toggle = document.querySelector('.mode .switch input');
let header = document.querySelector('.header');
let main = document.querySelector('.main');
let footer = document.querySelector('.footer');
let menuMobile = document.querySelector('.menu--mobile')
let menuHamburguer = document.querySelector('.nav--mode .menu');

// Events
toggle.addEventListener('change', () => {
  header.classList.toggle('dark');
  main.classList.toggle('dark');
  footer.classList.toggle('dark');
  menuMobile.classList.toggle('dark')
});

menuHamburguer.addEventListener('click', () => {
  if(menuMobile.style.display == 'flex') {
    menuMobile.style.display = 'none'
  } else {
    menuMobile.style.display = 'flex'
  }
});

