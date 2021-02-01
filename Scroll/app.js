// get date manually using getFullYear method enough through year changes through this
// method year automatically changes
var date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// get responsivenes for links 
var linksContainer = document.querySelector('.links-container');
var links = document.querySelector('.links');
var navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', ()=> {
    // here in below method we know the height of links so below method is oneliner 
    // but there are cases where we dont know the height of links so in another method we can height dynamitically...
    /* linksContainer.classList.toggle('show-links'); */
    // **** or **** //

    // by using below method we can manually get height and we use that...  ****getBoundingClientRect().height**** 
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});
/* The pageXOffset and pageYOffset properties returns the pixels the current document when scrolled 
from the upper left corner of the window, horizontally and vertically. 
        
    These properties are read-only.

    syntax 
    window.pageXOffset
    window.pageYOffset
*/
const nav = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', ()=> {
    let scrollHeight = window.pageYOffset;
    let navBarheight = nav.getBoundingClientRect().height;
    if (scrollHeight > navBarheight) {
        nav.classList.add('fixed-nav');
    }
    else {
        nav.classList.remove('fixed-nav');
    }
    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    }
    else {
        topLink.classList.remove('show-link');
    }
});

var scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link) {
    link.addEventListener('click', (e)=> {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        // console.log(id);
        const element = document.getElementById(id);

        const navHeight = nav.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = nav.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
        position = position - navHeight;
        }
        if (navHeight > 82) {
        position = position + containerHeight;
        }
        
        window.scrollTo({
            left: 0,
            top: position
        });
        linksContainer.style.height = 0;
    });
});