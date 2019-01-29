// Your code goes here
const button = Array.from(document.getElementsByClassName('btn'));
button.forEach(element => element.addEventListener('click', event => console.log('This event listener is working.')));

const images = Array.from(document.getElementsByTagName('img'));
images.forEach(element => element.addEventListener('mouseover', event => console.log('This event listener is also working.')));

const anchors = Array.from(document.getElementsByTagName('a'));
anchors.forEach(element => element.addEventListener('dblclick', event => element.style.color = 'red'));

window.addEventListener('scroll', event => console.log('You are scrolling'));
window.addEventListener('resize', event => console.log('This window has been resized.'));

const h1 = document.querySelector('h1');
h1.addEventListener('focus', event => h1.style.fontSize = '10rem');
