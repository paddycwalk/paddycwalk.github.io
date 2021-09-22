'use strict'

console.log('test');

button.onmouseover = function () {
    console.log('onmouseover');
}

button.onclick = function () {
    console.log('click');
}

const buttontest = document.getElementById('button')

console.log(buttontest, 'button');


// event listener

function nachricht() {
    console.log('event listener click');
}

button.addEventListener('click', nachricht);

// 
function styleBtn() {
    this.style.backgroundColor = 'green'
}
button.onclick = styleBtn;

// 
function mouseleave() {
    console.log('mouseleave')
}

buttontest.addEventListener('mouseleave', mouseleave)


// event
function eventtest(e) {
    console.log(e);
}

buttontest.addEventListener('click', eventtest);

const list = document.getElementById('list');

function klickList() {
    event.target.style.backgroundColor = 'green';
    console.log('event target:', event.target);
}

list.addEventListener('click', klickList)

// window

let hoehe = window.innerHeight;
let breite = window.innerWidth;

console.log('Hoehe:', hoehe + 'breite:', breite)

// setTimout

function alertTest() {
    alert('Set Timeout')
}

setTimeout(alertTest, 2000)