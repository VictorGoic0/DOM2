// Your code goes here
const button = Array.from(document.getElementsByClassName('btn'));
button.forEach(element => element.addEventListener('click', event => console.log('This event listener is working.')));

const images = Array.from(document.getElementsByTagName('img'));
images.forEach(element => element.addEventListener('mouseover', event => console.log('This event listener is also working.')));

const body = document.querySelector('body');
body.addEventListener('scroll', event => console.log('You are scrolling'));
