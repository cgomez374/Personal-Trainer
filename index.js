//variables
const hamMenu = document.getElementById('ham');
const nav = document.getElementById('navMenu');
const showcase = document.querySelector('#showcase');

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

// slideshow for showcase
function slideShow() {
    let i = Math.floor(Math.random() * 3) + 1;
    console.log(i);
    if(i > 0) {
        showcase.style.backgroundImage = `url("./images/slideshow/slideshow${i}.jpg")`;
    }
}

setInterval(() => {
    slideShow() 
}, 4000);

window.onload = slideShow();

