console.log("hello world!");

// 1. Zadatak
/*
Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.
*/

let s = 12;
let m = 15;
let odPonoci = s * 60 + m;
console.log("Od ponoci je proslo: ", odPonoci, "minuta");

// 2. Zadatak
/*
    Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.
*/

m = 66;
let prosliSati = Math.floor(m / 60);
let prosliMinuti = m % 60;
console.log("Od ponoci je proslo: ", prosliSati, "sati", "i", prosliMinuti, "minuta.");

//3. Zadatak
/*
    Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.
*/

let cena = 175;
let novcanica = 1000;
let kusur = novcanica - cena;
console.log("Kusur iznosi: ", kusur);

//4. Zadatak
/* 
    Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
*/

let datum = new Date();
s = datum.getHours();
m = datum.getMinutes();
odPonoci = s * 60 + m;
console.log("Od ponoci je proslo: ", odPonoci, "minuta.");

//5. Zadatak
/*
    Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.
*/

console.log(datum.getDate() + "." + (datum.getMonth() + 1) + "." + datum.getFullYear(), datum.getFullYear() + "/" + (datum.getMonth() + 1) + "/" + datum.getDate());

//6. Zadatak
/*
    Konverzija valute iz evra u dinare (i obrnuto).
*/

let dinar = 365;
console.log(dinar + " dinara je", dinar / 120, "eura.")