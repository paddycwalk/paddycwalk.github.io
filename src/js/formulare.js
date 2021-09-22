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