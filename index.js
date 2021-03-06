//variables

const hamMenu = document.getElementById('ham');
const nav = document.getElementById('navMenu');

//event listener
hamMenu.addEventListener('click', function(){
    nav.classList.toggle('showNav');
});

hamMenu.addEventListener('touchstart', function(){
    nav.classList.add('showNav');
    hamMenu.addEventListener('touchcancel', function(){
        nav.classList.remove('showNav');
    });
});

nav.addEventListener('click', function(){
    nav.classList.toggle('showNav');
});