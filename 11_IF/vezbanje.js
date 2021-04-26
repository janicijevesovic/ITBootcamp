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
let datumPrvi = "2005-01-01";
let datumDrugi = "2005-05-01";
if(datumPrvi < datumDrugi) {
    console.log(`${datumPrvi} je bio pre ${datumDrugi}`);
}
else if (datumDrugi < datumPrvi) {
    console.log(`${datumDrugi} je bio pre ${datumPrvi}`);
}
else {
    console.log(`${datumPrvi} i ${datumDrugi} su isti.`);
}

// 2. nacin
let dan1 = 01;
let mes1 = 06;
let god1 = 2021;

let dan2 = 01;
let mes2 = 06;
let god2 = 2021;

if (god1 < god2) {
    console.log("Datum 1 je raniji.")
}
else if (god2 < god1) {
    console.log("Datum 2 je raniji.");
}
// Posto su godine iste, proveravamo za mesece
else if (mes1 < mes2) {
    console.log("Datum 1 je raniji.");
}
else if (mes2 < mes1) {
    console.log("Datum 2 je raniji.");
}
// Posto su i godine i meseci isti, proveravamo za dane
else if (dan1 < dan2) {
    console.log("Datum 1 je raniji.");
}
else if (dan2 < dan1) {
    console.log("Datum 2 je raniji");
}
// Posto su i godine i meseci i dani isti datumi su jednaki
else {
    console.log("Datum 1 i Datum 2 su isti.");
}

let stepeni = -10;
if (stepeni < 0) {
    console.log("Ispod 0 stepeni");
}
else if (stepeni < 10) {
    console.log("Ispod 10 stepeni");
}
else if (stepeni < 20) {
    console.log("Ispod 20 stepeni");
}
else {
    console.log("20 i vise stepeni");
}

// Ugnjezdavanje

let pol = "m";
let god = 32;

if (pol == "z") {
    console.log("Osoba zenskog pola.");
    if (god >= 18) {
        console.log("Osoba je punoletna.");
    }
    else {
        console.log("Osoba je maloletna.");
    }
}
else {
    console.log("Osoba muskog pola.");
    if (god >= 18) {
        console.log("Osoba je punoletna.");
    }
    else {
        console.log("Osoba je maloletna.");
    }
}

// 12. Zadatak Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.
// Pocetak i kraj radnog vremena prvog lekara
let p1 = 14;
let k1 = 20;

// Pocetak i kraj radnog vremena drugog lekara
let p2 = 12;
let k2 = 19;

if (k1 < p2) {
    console.log("Ne preklepaju se smene.");
}
else if (k2 < p1) {
    console.log("Ne preklepaju se smene.");
}
else {
    console.log("Preklapaju se smene.");
}

let broj1 = 33;
let broj2 = 3;
if (broj1 % broj2 == 0) {
    console.log(`${broj1} je deljiv brojem ${broj2}.`);
}
else {
    console.log(`${broj1} nije deljiv brojem ${broj2}.`);
}

// Zadatak 13. Za uneti broj ispitati da li je paran ili nije. 
let broj = 18;
if (broj % 2 == 0) {
    console.log("Broj je paran");
}
else {
    console.log("Broj je neparan");
}

// Zadatak 14. Za uneti broj ispisati da li je deljiv sa 3 ili ne.
broj = 14;
if (broj % 3 == 0) {
    console.log("Deljiv sa 3");
}
else {
    console.log("Nije deljiv sa 3");
}

// Zadatak 15. Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
broj1 = 18;
broj2 = 20;
if (broj1 > broj2) {
    console.log(broj1 - broj2);
}
else {
    console.log(broj2 - broj1);
}

/* Zadatak 16. Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik. */

broj = 15;
if (broj <= 0) {
    console.log(broj - 1);
}
else {
    console.log(broj + 1);
}

// Zadatak 17 Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od nih je najmanji. 
let p = 15;
let q = 13;
let r = 21;

let najveci = p;
if (q > najveci) {
    najveci = q;
}
if (r > najveci) {
    najveci = r;
}

let najmanji = p;
if (q < najmanji) {
    najmanji = q;
}
if (r < najmanji) {
    najmanji = r;
}

if (p > q) {
    if (q > r) {
        srednji = q;
    }
    else if (p > r) {
        srednji = r;
    }
    else {
        srednji = p;
    }
}
else {
    if (p > r) {
        srednji = p;
    }
    else if (q > r) {
        srednji = r;
    }
    else {
        srednji = q;
    }
}

console.log(`Najveci broj je ${najveci}`);
console.log(`Srednji broj je ${srednji}`);
console.log(`Najmanji broj je ${najmanji}`);

// Zadatak 18. Za učitani broj ispitati da li je ceo.
broj = -5.2;
if (broj % 1 == 0) {
    console.log(`${broj} je ceo.`);
}
else {
    console.log(`${broj} nije ceo.`);
}

// Zadatak 19.  Isti kao 17.



// Zadatak 20. Učitati dva cela broja i ispitati da li je veći od njih paran.

broj1 = 9;
broj2 = 10;
if (broj1 > broj2) {
    if (broj1 % 2 == 0) {
        console.log(`${broj1} je veci i paran je.`);
    }
    else {
        console.log(`${broj1} je veci i neparan je.`);
    }
}
else if (broj2 > broj1) {
    if (broj2 % 2 == 0) {
        console.log(`${broj2} je veci i paran je.`);
    }
    else {
        console.log(`${broj1} je veci i neparan je.`);
    }
}
else {
    if (broj1 % 2 == 0) {
        console.log(`Brojevi su jednaki i parni su.`);
    }
    else {
        console.log(`Brojevi su jednaki i neparni su.`);
    }
}