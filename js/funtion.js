let btnMenu = document.getElementById('btn-menu');

let mainNav = document.getElementById('menu');

btnMenu.addEventListener('click', function(){
 
  mainNav.classList.toggle('mostrar');
});