/*let a = 5;

if (a > 0 && a < 10) { //Konjunkcija: a > 0 i a < 10 istovremeno
    console.log("Oba logicka uslova su zadovoljena.");
}
else {
    console.log("Barem jedan uslov nije zadovoljen.");
}

let b = 5;

if ((b < 0) || (b > 15)) { //Disjunkcija: (b < 0) ili (b > 15)
    console.log("Barem jedan logicki uslov je zadovoljen.");
}
else {
    console.log("Nijedan logicki uslov nije zadovoljen.");
}

let c = -3;

if (!(c < 0)) { //Negacija: nije (c < 0)
    console.log(`Broj ${c} je nenegativan.`);
}
else {
    console.log(`Broj ${c} je negativan.`);
}
*/

let pol = "m";
let godine = 15;

if ((pol == "m") && (godine >= 18)) {
    console.log("Musko - punoletan");
}
else if ((pol == "m") && (godine < 18)) {
    console.log("Musko - maloletan");
}
else if ((pol == "z") && (godine >= 18)) {
    console.log("Zensko - punoletna");
}
else {
    console.log("Zensko - maloletna");
}

// Zadatak 21. Naći koji je najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora. 

let a = 51;
let b = 7;
let c = 7;

if ((a > b) && (a > c)) {
    console.log(`Broj ${a} je najveci.`);
}
else if ((b > a) && (b > c)) {
    console.log(`Broj ${b} je najveci.`);
}
else {
    console.log(`Broj ${c} je najveci.`);
}

// Zadatak 22. Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let temperatura = 5;

if ((temperatura < -15) || (temperatura > 40)) {
    document.body.innerHTML = `<p style="color: red;">Ekstremna temperatura!</p>`;
}

// Zadatak 23. Ispitati da li je godina prestupna

let datum = new Date();
let trenutnaGodina = 1800;
if (((trenutnaGodina % 4 == 0) && (trenutnaGodina % 100 != 0)) || (trenutnaGodina % 400 == 0)) {
    console.log("Godina je prestupna.");
}
else {
    console.log("Godina nije prestupna.");
}

// Zadatak 24. Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.

datum = new Date(2021, 27, 4, 19, 30);
let trenutniDan = datum.getDay();
let trenutniSat = datum.getHours();


if (trenutniDan == 6 || trenutniDan == 0) {
    if (trenutniSat < 10 || trenutniSat >= 18) {
        console.log("Butik ne radi.");
    }
    else {
        console.log("Butik radi.");
    }
}
else {
    if (trenutniSat < 9 || trenutniSat >= 20) {
        console.log("Butik ne radi.");
    }
    else {
        console.log("Butik radi.");
    }
}