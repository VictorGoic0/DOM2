// Your code goes here
const button = Array.from(document.getElementsByClassName('btn'));
button.forEach(element => element.addEventListener('click', event => console.log('This event listener is working.')));

const images = Array.from(document.getElementsByTagName('img'));
images.forEach(element => element.addEventListener('mouseover', event => console.log('This event listener is also working.')));

const anchors = Array.from(document.getElementsByTagName('a'));
anchors.forEach(element => element.addEventListener('dblclick', event => element.style.color = '#c31d1d'));

window.addEventListener('scroll', event => console.log('You are scrolling'));
window.addEventListener('resize', event => console.log('This window has been resized.'));

const h1 = document.querySelector('h1');
window.addEventListener('keydown', event => h1.style.fontSize = '10rem');

const h2 = Array.from(document.getElementsByTagName('h2'));
h2.forEach(element => element.addEventListener('drag', event => element.style.color = '#0064ff'))

const h4 = Array.from(document.getElementsByTagName('h4'));
h4.forEach(element => element.addEventListener('mousemove', event => element.style.color = '#ff00e9'))

const copyright = document.querySelector('.footer p')
copyright.addEventListener('keyup', event => copyright.style.fontSize = '2rem')

const p = Array.from(document.getElementsByTagName('p'));
p.forEach(element => element.addEventListener('mouseenter', event => element.style.color = '#8400f9'))

// I will probably add more creative callbacks once I start messing with that animation tool. For now it will stay as color changes and console.logs.
