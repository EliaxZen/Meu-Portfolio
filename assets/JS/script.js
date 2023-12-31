// Initial Data
let toggle = document.querySelector('.mode .switch input');
let header = document.querySelector('.header');
let main = document.querySelector('.main');
let footer = document.querySelector('.footer');
let menuMobile = document.querySelector('.menu--mobile')
let menuHamburguer = document.querySelector('.nav--mode .menu');
let verMaisBotao = document.querySelector('.ver-mais--button button');

// Events
toggle.addEventListener('change', () => {
  header.classList.toggle('dark');
  main.classList.toggle('dark');
  footer.classList.toggle('dark');
  menuMobile.classList.toggle('dark');
  document.querySelector('.parede').classList.toggle('dark');
  document.querySelector('.container').classList.toggle('dark');
  document.querySelector('.logo h1').classList.toggle('dark');
  document.querySelector('.link1').classList.toggle('dark');
  document.querySelector('.link2').classList.toggle('dark');
  document.querySelector('.link3').classList.toggle('dark');
  document.querySelector('.link4').classList.toggle('dark');
  document.querySelector('.sobre-mim .conteudo p').classList.toggle('dark');
  document.querySelector('.projeto-conteudo .p1').classList.toggle('dark');
  document.querySelector('.projeto-conteudo .p2').classList.toggle('dark');
  document.querySelector('.projeto-conteudo .p3').classList.toggle('dark');
  document.querySelector('.projeto-conteudo .p4').classList.toggle('dark');
  document.querySelector('.projeto-conteudo .p5').classList.toggle('dark');
  document.querySelector('.projetos h1').classList.toggle('dark');
  document.querySelector('.caixa-recado h1').classList.toggle('dark');
  document.querySelector('.caixa-recado p').classList.toggle('dark');
  document.querySelector('.caixa-recado .email').classList.toggle('dark');
  document.querySelector('.caixa-recado .message').classList.toggle('dark');
});

menuHamburguer.addEventListener('click', () => {
  if(menuMobile.style.display == 'flex') {
    menuMobile.style.display = 'none'
  }else {
    menuMobile.style.display = 'flex'
  }
});

main.addEventListener('click', () => {
  if(menuMobile.style.display == 'flex') {
    menuMobile.style.display = 'none'
  }
});
footer.addEventListener('click', () => {
  if(menuMobile.style.display == 'flex') {
    menuMobile.style.display = 'none'
  }
});

verMaisBotao.addEventListener('click', () => {
  let verMais = document.querySelector('.ver-mais');

  if(verMais.style.display == 'flex') {
    verMais.style.display = 'none'
    verMaisBotao.innerHTML = 'Ver mais'
  } else {
    verMais.style.display = 'flex'
    verMaisBotao.innerHTML = 'Ver menos'
  }
});

