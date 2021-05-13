/*
let voce = ["jagoda", "jabuka", "malina", "kupina", "breskva"];

console.log(voce);
console.log(voce[2]);

voce[2] = "tresnja";
console.log(voce);

// Ispis elemenata niza:
console.log(voce[0], voce[1], voce[2]);

// Ispis elemenata niza koriscenjem petlje:
for (let i = 0; i < voce.length; i++) {
    console.log(voce[i]);
}

// Broj elemenata niza:
console.log(voce.length);

voce = ["kajsija", "dunja", "visnja"];
console.log(voce);

const povrce = ["tikvica", "boranija", "krompir"];
console.log(povrce);
povrce[0] = "tikva";
console.log(povrce);

// povrce = ["grasak", "pasulj"]; // Nije moguce ponovo dodavati vrednosti konstantnoj varijabli

let razno = [3, -15.5, false, "bla bla bla", ["a", "b", "c"]];
console.log(razno);
*/

// Zadatak 2 Odrediti zbir elemenata celobrojnog niza.
let brojevi = [150, 140, 360, 120, 180];
let suma = 0;
for (let i = 0; i < brojevi.length; i++) {
    suma += brojevi[i];
}
console.log(suma);

// Zadatak 3 

brojevi = [3, 4, -2, 2];
let proizvod = 1;
for (let i = 0; i < brojevi.length; i++) {
    proizvod *= brojevi[i];
}

let proizvodCelobrojnogNiza = nizBrojeva => {
    let proizvod = 1;
    for (let i = 0; i < nizBrojeva.length; i++) {
        proizvod *= nizBrojeva[i];
    }
    return proizvod;
}

console.log(proizvodCelobrojnogNiza([2, 3, 5, -1, 2, -3]));

// Zadatak 4

brojevi = [1, 3, 6, -5, 12, 2];
suma = 0;
for (let i = 0; i < brojevi.length; i++) {
    suma += brojevi[i];
}

let srednjaVrednostNiza = nizBrojeva => {
    let suma = 0;
    for (let i = 0; i < nizBrojeva.length; i++) {
        suma += nizBrojeva[i];
    }
    return suma / nizBrojeva.length;
}

console.log(srednjaVrednostNiza([3, 2, 5, 2]));

// Zadatak 5
brojevi = [150, 140, 360, 120, 180];
let maksimalnaVrednost = brojevi[0];
for (let i = 0; i <= brojevi.length; i++) {
    if (maksimalnaVrednost < brojevi[i]) {
        maksimalnaVrednost = brojevi[i];
    }
}
console.log(maksimalnaVrednost);

// Zadatak 6
let minimalnaVrednostNiza = nizBrojeva => {
    let minimalnaVrednost = nizBrojeva[0];
    for (let i = 1; i < nizBrojeva.length; i++) {
        if (nizBrojeva[i] < minimalnaVrednost) {
            minimalnaVrednost = nizBrojeva[i];
        }
    }
    return minimalnaVrednost;
}
console.log(minimalnaVrednostNiza([4, -6, 2, 8, 1]));

// Zadatak 7 Odrediti indeks maksimalnog elementa celobrojnog niza
brojevi = [150, 140, 360, 120, 180, 360, 140, 360];

// 1. nacin
let indeks = 0;
for (let i = 0; i < brojevi.length; i++) {
    if (maksimalnaVrednost == brojevi[i]) {
        indeks = i; // Bez break ispisuje poslednji indeks maksimalnog elementa
        // break; Sa break ispisuje prvi indeks maksimalnog elementa
    }
}

// 2. nacin
let maksVrednost = brojevi[0];
let maksIndeks = 0;
for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] > maksVrednost) { // >= daje poslednji indeks dok > daje prvi indeks
        maksVrednost = brojevi[i];
        maksIndeks = i;
    }
}

// Zadatak 8 Odrediti indeks minimalnog elementa celobrojnog niza

let indeksMinimalnogElementa = nizBrojeva => {
    let minVrednost = minimalnaVrednostNiza(nizBrojeva);
    for (let i = 0; i < nizBrojeva.length; i++) {
        if (minVrednost == nizBrojeva[i]) {
            return i;
        }
    }
}

let indeksMinimalnogElementa2 = nizBrojeva => {
    let minVrednost = minimalnaVrednostNiza(nizBrojeva);
    let indeksi = "";
    for (let i = 0; i < nizBrojeva.length; i++) {
        if (minVrednost == nizBrojeva[i]) {
            indeksi += `${i} `;
        }
    }
    return indeksi;
}


console.log(indeksMinimalnogElementa2([11, 1, 1, 6, 1, 10]));

// Zadatak 9 Odrediti broj elemenata celobrojnog niza koji su veci od srednje vrednosti

let brojElemenataVecihOdSrednjeVrednosti = nizBrojeva => {
    let brojBrojeva = 0;
    let srednjaVrednost = srednjaVrednostNiza(nizBrojeva);
    for (let i = 0; i < nizBrojeva.length; i++) {
        if (nizBrojeva[i] > srednjaVrednost) {
            brojBrojeva += 1;
        }
    }
    return brojBrojeva;
}

console.log(brojElemenataVecihOdSrednjeVrednosti([-5, 7, 10, -3, 8, 1]));

// Zadatak 10 Izracunati zbir pozitivnih elemenata celobrojnog niza

let zbirPozitivnihElemenata = nizBrojeva => {
    let zbir = 0;
    for (let i = 0; i < nizBrojeva.length; i++) {
        if (nizBrojeva[i] > 0) {
            zbir += nizBrojeva[i];
        }
    }
    return zbir;
}

console.log(zbirPozitivnihElemenata([2, -3, 0, 2, 1]));


// Zadatak 11 Odrediti broj parnih elemenata u celobrojnom nizu

let brojParnihElemenata = nizBrojeva => {
    let brojParnih = 0;
    for (let i = 0; i < nizBrojeva.length; i++) {
        if (nizBrojeva[i] % 2 == 0) {
            brojParnih += 1;
        }
    }
    return brojParnih;
}

console.log(brojParnihElemenata([0, 2, 4, 3, -1, -2, -4]));

// Zadatak 12. Odrediti broj parnih elemenata sa neparnim indeksom
let nizBrojeva = [10, 16, 15, 17, 12, -14];
let brElem = 0;
for (let i = 0; i < nizBrojeva.length; i++) {
    // indeks - i
    // element - nizbrojeva[i];
    if (nizBrojeva[i] % 2 == 0 && i % 2 == 1) {
        brElem += 1;
    }
}
console.log(brElem);