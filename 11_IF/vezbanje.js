/*
// Zadatak 1. Za dva uneta broja ispisati koji je veći a koji je manji.
let broj1 = 17;
let broj2 = 17;

if (broj1 > broj2) {
    console.log(`Broj ${broj1} je veci od broja ${broj2}.`);
}
else if (broj2 > broj1) {
    console.log(`Broj ${broj1} je manji od broja ${broj2}.`);
}
else {
    console.log(`Broj ${broj1} i broj ${broj2} su jednaki.`);
}

// Zadatak 2. Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.
let temperatura = -5;
if (temperatura >= 0) {
    console.log(`Temperatura je u plusu.`);
}
else {
    console.log(`Temperatura je u minusu.`);
}

// Zadatak 3. U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. 
let pol = "zenski";
if (pol == "muski") {
    document.body.innerHTML = `<img src="Male.png">`;
}
else if (pol == "zenski") {
    document.body.innerHTML = `<img src="Female.png">`;
}

// Zadatak 4. U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.
let datum = new Date();
let brojSati = datum.getHours();
if (brojSati < 12) {
    console.log(`Sada je jutro.`);
}
else {
    console.log(`Sada je popodne.`);
}

// Zadatak 5. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.
let godinaRodjenja = 1995;
let trenutnaGodina = datum.getFullYear();
if (trenutnaGodina - godinaRodjenja < 18) {
    console.log(`Osoba je maloletna.`);
}
else {
    console.log(`Osoba je punoletna.`);
}

// Zadatak 6. Odrediti najveći od tri uneta broja.
let p = 8;
let q = 5;
let r = 9;
if (p > q) {
    if (p > r) {
        console.log(`Broj ${p} je najveci.`)
    }
}
if (q > p) {
    if (q > r) {
        console.log(`Broj ${q} je najveci.`)
    }
}
if (r > p) {
    if (r > q) {
        console.log(`Broj ${r} je najveci.`)
    }
}
*/

// Zadatak 8. Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 
let datum = new Date();
let danasnjiDan = datum.getDay();
if (danasnjiDan == 0) {
    console.log("Danas je vikend.");
}
else if (danasnjiDan == 6) {
    console.log("Danas je vikend.");
}
else {
    console.log("Danas je radni dan.");
}

/* Zadatak 9. Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče. */

let brojSati = datum.getHours();
if (brojSati < 12) {
    console.log("Dobro jutro!");
}
else if (brojSati < 18) {
    console.log("Dobar dan!");
}
else {
    console.log("Dobro vece!");
}

/* Zadatak 11. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi. */
if (brojSati > 9) {
    console.log("Neradno vreme.");
}
else if (brojSati < 17) {
    console.log("Neradno vreme.");
}
else {
    console.log("Radno vreme.");
}

/* Zadatak 7. Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. 
Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. */

let brojPoena = 78;
if (brojPoena > 90) {
    console.log("Ucenik je dobio ocenu 10.");
}
else if (brojPoena > 80) {
    console.log("Ucenik je dobio ocenu 9.");
}
else if (brojPoena > 70) {
    console.log("Ucenik je dobio ocenu 8.");
}
else if (brojPoena > 60) {
    console.log("Ucenik je dobio ocenu 7.");
}
else if (brojPoena > 50) {
    console.log("Ucenik je dobio ocenu 6.");
}
else {
    console.log("Ucenik je pao ispit.");
}

// Zadatak 10. Uporediti dva uneta datuma i ispisati koji od njih je raniji.
let datumPrvi = new Date (2015, 6, 5);
let datumDrugi = new Date (2016, 7, 8);
