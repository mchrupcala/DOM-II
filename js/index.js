// Your code goes here


//Swing the bus Img. Question --> why is the image scrolling above the header? Fixed when I comment this out, and the z-index isn't helping to fix it.
const busImg = document.querySelector('.intro img');

busImg.addEventListener('load', (e) => {
    busImg.setAttribute('class', 'swing animated');
    busImg.style.zIndex = 2;
})


//Hover "Welcome to the Fun Bus" and text zooms away.
const h2Fun = document.querySelector('.intro h2');

h2Fun.addEventListener('mouseover', (event) => {
    event.target.setAttribute('class', 'zoomOutRight animated')
})


// Color the nav bar a random color whenever any key is hit.

const navLink = document.querySelectorAll('a');

var colors = ['red', 'purple', 'blue', 'green', 'black', 'tan', 'skyblue', 'magenta', 'yellow', 'orange'];

console.log(navLink);
navLink.forEach((attrs) => {
    window.addEventListener('keydown', (e) => {
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        attrs.style.color = random_color;
    });
    //Prevent the nav bar from firing (added wikipedia.org as Home destination to test.)
    attrs.addEventListener('click', (e) => {
        event.preventDefault();
    })
})


// On resize, change all text to comic sans, and back again.

const text = document.querySelectorAll('p');
var count = 1;
function resized() {
    count++;
}
window.onresize = resized;

text.forEach((attrs) => {
    window.addEventListener('resize', (e) => {

        if (count%2 == 0) {
            attrs.style.fontFamily = 'Comic Sans MS';
        }
        else {
            attrs.style.fontFamily = 'Times New Roman';
        }
    });
})

// On scroll, all images should bounce.

const imgs = document.querySelectorAll('img');
imgs.forEach((attrs) => {
    window.addEventListener('scroll', (e) => {
        attrs.setAttribute('class', 'bounce animated');
    })
})

//Double-click "Adventure Awaits" and the text flies away.
const go = document.querySelector('.inverse-content .text-content h2');

go.addEventListener('dblclick', (event) => {
    event.target.setAttribute('class', 'lightSpeedOut animated')
})

//Turn the footer orange on click.
const footer = document.querySelector('footer');
footer.addEventListener('click', (e) => {
    event.target.style.background = 'orange';
})

//On mouseover
const waterPic = document.querySelector('.img-fluid');

waterPic.addEventListener('mouseover', (e) => {
    event.target.style.filter = 'sepia(100%)';
})


//Remove any of the bottom headers or paragraphs or buttons with a click.
const dest = document.querySelectorAll('.destination p');

dest.forEach((attrs) => {
    attrs.addEventListener('click', (e) => {
        event.target.style.display = 'none';
        // event.stopPropogation();
    })
})

//^^this is weird because I'd expect the 'p' element to propogate up to the .destination div. But it's not...so then I added a div element around the last Island Getaway box...thinking that the new 'p' element would propogate. But it's still not. If I comment/uncomment the stopPropogation method...there's literally no difference.