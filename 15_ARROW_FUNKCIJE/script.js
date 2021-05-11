// Imenovane funkcije

function suma(a, b) { // Deklaracija imenovane funkcije
    return a + b;
}

console.log(suma(1, 2)); // Poziv funkcije: ime funkcije i prosledjivanje vrednosti


// Anonimne funkcije
let suma2 = function(a, b) { // Deklaracija anonimne funkcije
    return a + b;
}

console.log(suma2(3, 4)); // Poziv anonimne funkcije je preko promenljive u kojoj je sacuvana

// Arrow funkcije
let suma3 = (a, b) => {
    return a + b;
}

console.log(suma3(4, 6));

// Arrow funkcija koja ispisuje "Hello world!"
let hello = () => {
    console.log("Hello World!");
}

hello();
hello();

// Arrow funkcija koja pozdravlja korisnika
let korisnik = (ime) => {
    console.log(`Hello ${ime}!`);
}

korisnik("Stefan");
korisnik("Jelena");

// Arrow funkcija koja ispisuje ime korisnika, kao i pravni status
let korisnik2 = (ime, godine) => {
    if (godine < 18) {
        let ispis = "Korisnik " + ime + " je maloletno lice";
        document.body.innerHTML += `<p style="color:green">${ispis}</p>`;
    }
    else {
        let ispis = "Korisnik " + ime + " je punoletno lice";
        document.body.innerHTML += `<p style="color:yellow">${ispis}</p>`;
    }
}

korisnik2("Glorija", 28);
korisnik2("Petar", 7);
