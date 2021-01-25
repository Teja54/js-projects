let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', ()=> {
    /*if(mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
    }
    else {
        mainNav.classList.add('active');
    }*/
    // above method or below 
    mainNav.classList.toggle('active'); 
});