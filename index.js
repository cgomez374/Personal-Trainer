//variables
const hamMenu = document.getElementById('ham');
const nav = document.getElementById('navMenu');
const showcase = document.querySelector('#showcase');
let i = 1;

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
    if(i > 0) {
        showcase.style.backgroundImage = `url("./images/slideshow/slideshow${i}.jpg")`;
    }

    if(i >= 3){
        i = 0;
    }

    i++;
}

setInterval(() => {
    slideShow() 
}, 4000);

