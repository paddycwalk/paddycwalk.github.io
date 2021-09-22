'use strict';

// Alert
// alert('Hello World!');

// Console log
console.log('Hello Console');

// Abfage
// prompt('How old are you?');

// Ausgabe einer Abfrage
// alert('Sie sind ' + prompt('Wie alt sind sie?') + ' Jahre alt');

// Variable
let meineVariable;

console.log(meineVariable);

let welcomeText = 'Willkommen zu den JS Übungen'
// alert(welcomeText);

// var, let, const (var kann überschrieben werden, let nur im Block veränderbar, constante kann nicht verändert werden)
var meineVar = 7;
let meineLet = 'Meine Let';
let meinString = 'Das hier ist ein String';
let meinBoolean = true;
const meineKonstante = 'Meine Konstante';

// 
let meineZahl = 711;

// Datentypen
document.write ("Zahl: " + typeof meineVar + "<br>");
document.write ("String: " + typeof meinString + "<br>");
document.write ("Boolean: " + typeof meinBoolean + "<br><br>")

// Datentypen verändern
// let eingabe = prompt('Geben Sie eine Zahl ein:');
// document.write ("Datentyp: " + typeof eingabe + "<br>");
// document.write (eingabe + 3 + "<br>");
// eingabe = Number(eingabe);
// document.write ("Datentyp: " + typeof eingabe + "<br>");
// document.write (eingabe + 4);


// Operationen

// meineZahl *=2;
// meineZahl +=2;
// meineZahl +=1;
// meineZahl -=1;
// Kurzschreibweise
meineZahl ++;
meineZahl --;
console.log(meineZahl);

// Übung

// let wert1 = prompt("Wert 1:");
// let wert2 = prompt("Wert 2:");

// wert1 = Number(wert1);
// wert2 = Number(wert1);

// let ergebnis = wert1 * wert2

// console.log(ergebnis);


// If-Abfragen

// let userTest = prompt("Was ist 3+2?");
// let userTest2 = prompt("Was ist 5*5?");

// if (userTest == 5) {
//     console.log('Sie liegen richtig');
// } else {
//     console.log('Sie liegen falsch');
// }


// if (userTest == 5) {
//     console.log('richtig');
// } 

// if (userTest != 5) {
//     console.log('falsch');
// }

// if (userTest == 5 && userTest2 == 25) {
//     console.log('beide richtig');
// }

// if (userTest == 5 || userTest2 == 25) {
//     console.log('eins von beiden ist richtig');
// }

// if (!(userTest == 5) || userTest2 == 25) {
//     console.log('2te Bedingung trifft zu');
// }

// if (!(userTest == 5 || userTest2 == 25)) {
//     console.log('min 1 ist falsch');
// }


// switch

let artikel = prompt('Welchen Artikel suchen Sie?')

switch (artikel) {
    case "Bohrmaschine":
        console.log('Preis: 25$');
        break;
    case "Schraubenschlüssel":
    case "Hammer":
        console.log('Preis: 35$');
        break;
    default:
        console.log('Keinen passenden Artikel gefunden');
}


// Arrays

let meinArray = ["Bohrmaschine", "Schraubenschlüssel", "Hammer"];
console.log(meinArray);
console.log(meinArray[2])
meinArray[0] = "bessereBohrmaschine";
console.log(meinArray[0]);
meinArray[meinArray.length] = "neuesTool";
console.log(meinArray);


// Map

let meineMap = new Map();
meineMap.set("Produkttyp", "Bohrmaschine");
meineMap.set("Preis", "35$");
meineMap.set("Verfügbarkeit", true);
// get= Abfrage eines Wertes(key)
// meineMap.get("Produkttyp");
console.log(meineMap.get("Preis"));
console.log("Größe der Map:", meineMap.size);
console.log(meineMap.delete("Preis"));
console.log(meineMap);
// gibt auch noch .clear, .has


// white Schleifen
let eingabe = 0;

while (eingabe != 5) {
    eingabe = prompt("Was ist das Ergebnis aus 3+2?")
};
alert("Richtige Lösung");


let eingabe2 = Number(prompt(decodeURI("Bis zu welchem Wert möchten Sie zählen?")));
let i = 1;

while (i <= eingabe2) {
    document.write(i + "</br>");
    i++;
}
