'use strict';

console.log(document.forms[0])
// oder
console.log(document.forms.formular)
console.log(formular.feld2.value);
console.log(document.forms.formular.elements.feld3.value)
formular.feld3.checked = true

auswahl.selectedIndex = 1

// const feld1 = document.getElementById('feld1');

let angezeigt = false;
function nachricht() {
    if(!angezeigt) {
        alert('Geben Sie bitte ihren Namen ein')
        angezeigt = true
    }
}



feld1.onfocus = nachricht;
// 

function subimitFormular() {
    formular.submit();
}

submitBtn.onmouseover = subimitFormular;


var btnModalCheck = document.getElementById('btnModal');
var Modal = document.querySelector('.modal__container')
var ModalClose = document.querySelector('.modal__close')

console.log('Modal:', Modal);


btnModalCheck.onclick = function (){
    Modal.classList.toggle('modal__container--open')
}

ModalClose.onclick = function() {
    Modal.classList.remove('modal__container--open')
}

window.onclick = function(event) {
    console.log('event:', event.target);
    if (event.target == Modal) {
        Modal.classList.remove('modal__container--open')
    }
}

// ajax
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
    }
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}