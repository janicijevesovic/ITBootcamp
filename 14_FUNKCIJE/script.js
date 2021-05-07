let pr = 4;
let pr2 = 50;
if (pr < 10) {
    pr = "0" + pr;
}

if (pr2 < 10) {
    pr2 = "0" + pr2;
}

console.log(pr); // poziv funkcije log
console.log(pr2); // poziv funkcije log

// Definicija funkcije (telo funkcije)

function mojaFunkcija() {
    console.log("Zdravo svete!");
}

console.log("Neki tekst pre poziva funkcije");

// Poziv funkcije
mojaFunkcija();

console.log("Neki tekst posle poziva funkcije");

// Poziv funkcije
mojaFunkcija();
mojaFunkcija();

// Definicija druge funkcije
function ispisiTekst(tekst) {
    console.log("Ispisujem tekst: " + tekst);
}
// Pozivi funkcije
ispisiTekst("ITBootcamp"); // Prilikom poziva funkcije prosledjuje se neka vrednost
ispisiTekst('Pera Peric');
ispisiTekst(25);
let x = "Mika";
ispisiTekst(x);

console.log(x);
// console.log(tekst);

let tekst = "Zika"; // Globalna promenljiva
ispisiTekst(tekst);

console.log(tekst); // Ovo nije parametar tekst nego glovalna promenljiva

function test(x) {
    if (x % 2 == 0) {
        var y = "Paran"; // var -- Function scope (Promenjljiva vazi unutar funkcije)
    }
    else {
        let z = "Neparan"; // let -- Block scope (Promenljiva vazi unutar bloka) (Za const vazi isto kao let)
    }
    console.log(x); // 6
    console.log(y); // Paran
    console.log(z);
}

// test(5);

// Definicija funkcije
function korisnik(ime, prezime) {
    console.log(`Korisnik: ${ime} ${prezime}`);
}

// Poziv funkcije
korisnik("Pera", "Peric");
korisnik("Laza, Lazic"); // druga vrednost je undefined

// Napisati funkciju koja ispisuje ime i prezime korisnika (koji se prosledjuju kao parametri),
// kao i info da li je prezime korisnika dugacko (ako ima od 10 karaktera)

function korisnikPrezime(ime, prezime) {
    if (prezime.length > 10) {
        console.log(`Korisnik: ${ime} ${prezime} ima dugacko prezime.`);
    }
    else {
        console.log(`Korisnik: ${ime} ${prezime} nema dugacko prezime.`);
    }
}

korisnikPrezime("Jelena", "Matejic");
korisnikPrezime("Stefan", "Stanimirovic");

function korisnikGodine(ime, god) {
    if (god >= 18) {
        console.log(`Korisnik: ${ime} ima ${god} godina i punoletna je osoba`);
    }
    else {
        console.log(`Korisnik: ${ime} ima ${god} godina i maloletna je osoba`);
    }
}

korisnikGodine("Pera", 29);
korisnikGodine("Laza", 15);


// Funkcija koja ISPISUJE zbir svoja dva parametra
function zbir1 (a, b) {
    let rez = a + b;
    console.log(`Zbir je ${rez}`);
}
zbir1 (5, 10);
let a = 2;
let b = 7;
zbir1 (a, b);

/*
let datum = new Date();
let dan = datum.getDay(); // VRACA dan u nedelji

datum.getDay(); // NE ISPISUJE dan u nedelji
*/

// Funkcija koja VRACA zbir svoja dva parametra
function zbir2(a, b) {
    let rez = a + b;
    return rez;
}

let z = zbir2(5, 6);
console.log(`Zbir brojeva 5 i 6 jednak je: ${z}`);
console.log(`Sum of numbers 5 and 6 is equal to: ${z}`);
if (z >= 0) {
    console.log("Zbir je nenegativan broj");
}
else {
    console.log("Zbir je negativan broj");
}

if (zbir2(-5, -6) >= 0) {
    console.log("Zbir brojeva -5 i -6 je nenegativan broj");
}
else {
    console.log ("Zbir brojeva -5 i -6 je negativan broj");
}

let s = zbir2(5, 8) + zbir2(8, 9);
if (s % 2 == 0) {
    console.log("Zbir ova cetiri broja je paran");
}
else {
    console.log("Zbir ova cetiri broja je neparan");
}

function proizvod(a, b) {
    return a * b;
    // console.log("Hello world!"); - sve komande posle return nece biti izvrsene
}

// return ima dvojaku ulogu:
// 1) VRACA vrednost funkciji
// 2) PREKIDA izvrsenje funkcije

console.log(proizvod(5, 6));