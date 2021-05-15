// Zadatak 2 Odrediti zbir elemenata celobrojnog niza.

let a = [5, -9, 11, 9, 4];
let suma = 0;
a.forEach(elem => {
    suma += elem;
});
console.log(`Zbir je ${suma}.`);

let zbirNiza = niz => {
    let zbir = 0;
    niz.forEach(elem => {
        zbir += elem;
    });
    return zbir;
}
console.log(zbirNiza(a));

// Zadatak 3 Odrediti proizvod elemenata celobrojnog niza.
let proizvod = 1;
a.forEach (elem => {
    proizvod *= elem;
});
console.log(`Proizvod je ${proizvod}.`);

let proizvodNiza = celobrojniNiz => {
    let proizvod = 1;
    celobrojniNiz.forEach(elem => {
        proizvod *= elem;
    });
    return proizvod;
}
console.log(proizvodNiza(a));

// Zadatak 4 Odrediti srednju vrednost elemenata celobrojnog niza.
console.log(`Srednja vrednost niza je ${suma / a.length}.`);

let srVrNiza = niz => {
    let srVr = 0;
    niz.forEach(elem => {
        srVr += elem;
    });
    srVr /= niz.length;
    return srVr;
}
console.log(srVrNiza(a));

// Zadatak 5 Odrediti maksimalnu vrednost u celobrojnom nizu

let maksClan = a[0];
a.forEach(elem => {
    if (elem > maksClan) {
        maksClan = elem;
    }
});
console.log(`Najveci clan niza je ${maksClan}.`);

let maxNiz = niz => {
    let max = niz[0];
    niz.forEach(elem => {
        if (elem > max) {
            max = elem;
        }
    });
    return max;
}



let c = [15, 7, 8, 15, 15, 0, 9, 15, 0, 2, 0];
console.log(maxNiz(c));

/*
    Napisati funkciju koja vraca broj elemenata sa:
        -maksimalnom vrednoscu
        -minimalnom vrednoscu
*/

/*
let brojMaxNiz = niz => {
    let max = maxNiz(niz);
    let broj = 0;
    niz.forEach(elem => {
        if (elem == max) {
            broj += 1;
        }
    });
    return broj;
}

let brojMinNiz = niz => {
    let min = minNiz(niz);
    let broj = 0;
    niz.forEach(elem {
        if (elem == min) {
            broj += 1;
        }
    });
    return broj;
}
*/

let brojSvojstvoNiz = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let broj = 0;
    niz.forEach(elem => {
        if (elem == s) {
            broj += 1;
        }
    });
    return broj;
}



// Zadatak 6 Odrediti minimalnu vrednost u celobrojnom nizu

let minClan = a[0];
a.forEach(elem => {
    if (elem < minClan) {
        minClan = elem;
    }
});
console.log(`Najmanji clan niza je ${minClan}.`);

let minNiz = niz => {
    let min = niz[0];
    niz.forEach(elem => {
        if (elem < min) {
            min = elem;
        }
    });
    return min;
}

console.log("Broj elemenata sa maksimalnom vrednoscu jednak je: " + brojSvojstvoNiz(c, maxNiz));
console.log("Broj elemenata sa minimalnom vrednoscu jednak je: " + brojSvojstvoNiz(c, minNiz));

// Zadatak 7 Odrediti indeks maksimalnog elementa celobrojnog niza
maksClan = a[0];
let indeksMaksClan = 0;
a.forEach((elem, indeks) => {
    if (elem > maksClan) {
        maksClan = elem;
        indeksMaksClan = indeks;
    }
});
console.log(`Indeks maksimalnog elementa niza je ${indeksMaksClan}`);

let indeksMaksClana = celobrojniNiz => {
    let maksClan = celobrojniNiz[0];
    let indeksMaksClan = 0;
    celobrojniNiz.forEach((elem, indeks) => {
        if (elem > maksClan) {
            maksClan = elem;
            indeksMaksClan = indeks;
        }
    });
    return indeksMaksClan;
}

console.log(indeksMaksClana(a));

// Zadatak 8 Odrediti indeks minimalnog elementa celobrojnog niza
minClan = a[0];
let indeksMinClan = 0;
a.forEach((elem, indeks) => {
    if (elem < minClan) {
        minClan = elem;
        indeksMinClan = indeks;
    }
});
console.log(`Indeks minimalnog elementa niza je ${indeksMinClan}`);

