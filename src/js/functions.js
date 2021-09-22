// console.log('Test');

let name;

function newFunction() {
    console.log('newFunction');
    name = prompt('Wie lautet ihr Name?')
    alert('Hello ' + name)
}

newFunction();

document.write('Hallo ', name)

function outerFunction(name) {
    console.log('Name der vorherigen Funktion: ', name );
}

outerFunction(name);



// return Function
function rechnung(x) {
    let ergebnis = 5+5+x;
    return ergebnis;
}

let wert = rechnung(5);
document.write("<br>")
document.write('Das ergebnis der return Function ist: ', wert)