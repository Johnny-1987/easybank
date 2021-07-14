const body = document.querySelector('body');
const header__hamburger = document.querySelector('.header__hamburger');
const openHamburger = document.querySelector('.hamburger-menu');
const overlay = document.querySelector('.overlay');
const btnHamburger = document.querySelector('#btnHamburger');


btnHamburger.addEventListener('click', function() {
    if (header__hamburger.classList.contains('hamburger-toggle')) {
        body.classList.remove('no-scroll');  
        header__hamburger.classList.remove('hamburger-toggle');
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
        openHamburger.classList.remove('open-hamburger-menu');
    }    
    else {
        body.classList.add('no-scroll');
        header__hamburger.classList.add('hamburger-toggle');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        openHamburger.classList.add('open-hamburger-menu');
    }
})




