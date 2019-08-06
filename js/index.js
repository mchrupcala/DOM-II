// Your code goes here


//Swing the bus Img. Question --> why is the image scrolling above the header? Fixed when I comment this out, and the z-index isn't helping to fix it.
const busImg = document.querySelector('.intro img');

busImg.addEventListener('load', (e) => {
    busImg.setAttribute('class', 'swing animated');
    busImg.style.zIndex = 2;
})


//Should be -> hover "Welcome to the Fun Bus" and text zooms away. Actually, will only respond if you click. Why?
const h2Fun = document.querySelector('.intro h2');

h2Fun.addEventListener('mouseover', (event) => {
    event.target.setAttribute('class', 'zoomOutRight animated')
})


// Color the nav bar a random color whenever any key is hit.

const navLink = document.getElementsByClassName('nav-link');

navLink.addEventListener('keydown', (e) => {
    navLink.style.color = 'red';
})