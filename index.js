//variables

const hamMenu = document.getElementById('ham');
const nav = document.getElementById('navMenu');

//event listener
hamMenu.addEventListener('click', function(){
    nav.classList.toggle('showNav');
});

hamMenu.addEventListener('touchstart', function(){
    nav.classList.toggle('showNav');
});

nav.addEventListener('click', function(){
    nav.classList.toggle('showNav');
});