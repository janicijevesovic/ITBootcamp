function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    let div = document.getElementById("container");
    //div.innerHTML = poruka; - ako se brise stari sadrzaj div-a
    div.innerHTML += poruka + "<br>";
}

function ispisNiza(niz, cb) {
    let poruka = "";
    for (let i = 0; i < niz.length; i++) {
        poruka += niz[i] + " ";
    }
    cb(poruka); // poziv callback funkcije
}

let a = [5, -9, 11, 9, 4];
let b = ["Vuk", "Nikola", "Jelena", "Jelena", "Anita"];

ispisNiza(a, ispisKonzola); // poziv funkcije ispisNiza
ispisNiza(a, ispisStranica); // poziv funkcije ispisNiza
ispisNiza(b, ispisKonzola); // poziv funkcije ispisNiza
ispisNiza(b, ispisStranica); // poziv funkcije ispisNiza

// pozivi funkcije preko anonimnih callback funkcija

ispisNiza(a, par => {
    console.log(par);
});

ispisNiza(a, function(par) {
    let div = document.getElementById("container");
    div.innerHTML += par + "<br>";
});

// forEach petlja

a.forEach(e => {
    console.log(`Element niza je: ${e}`);
});

b.forEach((e, i) => {
    console.log(`Element ${e} sa indeksom ${i}`);
});

// Ispis elemenata niza sa parnim indeksom
b.forEach((e, i) => {
    if (i % 2 == 0) {
        console.log(`Element ${e} ima paran indeks`);
    }
});

