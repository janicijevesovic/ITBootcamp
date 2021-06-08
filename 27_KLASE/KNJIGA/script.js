import { Knjiga } from "./knjiga.js";
let knjiga1 = new Knjiga("Bajke", "Hans Hristijan Andersen", 2004, 714, 500);
knjiga1.stampaj();
console.log("Da li je knjiga obimna: " + knjiga1.obimna());
console.log("Da li je knjiga skupa: " + knjiga1.skupa());
console.log(`Ime autora je: ${knjiga1.autor}; Da li je ime dugacko: ${knjiga1.dugackoIme()}`);

let knjiga2 = new Knjiga("Hajdi", "Johana Spiri", 1994, 304, 600);
let knjiga3 = new Knjiga("Orlovi rano lete", "Branko Copic", 2020, 186, 400);

let arrKnjige = [knjiga1, knjiga2, knjiga3];
console.log(arrKnjige);

// Ispis svih podataka iz niza arrKnjige

// 1. nacin
arrKnjige.forEach(knjiga => {
    knjiga.stampaj();
});

// 2. nacin
for(let i = 0; i < arrKnjige.length; i++) {
    // arrKnjige[i] je objekat
    arrKnjige[i].stampaj();
}

// Kolika je ukupna cena svih knjiga
let ukupnaCena = nizKnjiga => {
    let ukupnaCena = 0;
    nizKnjiga.forEach(knjiga => {
        ukupnaCena += knjiga.cena; // knjiga.cena je geter i poziva se bez ()
    });
    return ukupnaCena;
}

console.log(ukupnaCena(arrKnjige));

// Kolika je prosecna cena knjige
let prosecnaCena = nizKnjiga => {
    let ukupna = ukupnaCena(nizKnjiga);
    return ukupna / nizKnjiga.length;
}

console.log(prosecnaCena(arrKnjige));

// Kolika je prosecna cena stranice knjige
let prosecnaCenaStranice = nizKnjiga => {
    let ukupnaCenaKnjiga = ukupnaCena(nizKnjiga);
    let brojStranica = 0;
    nizKnjiga.forEach(knjiga => {
        brojStranica += knjiga.brojStrana;
    });
    return ukupnaCenaKnjiga / brojStranica;
}

console.log(prosecnaCenaStranice(arrKnjige));