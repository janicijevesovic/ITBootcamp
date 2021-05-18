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

// Zadatak 16

let spisakKupovina = nizStavki => {
    let spisak = `<ul>`;
    nizStavki.forEach(elem => {
        spisak += `<li>${elem}</li>`
    });
    spisak += `</ul>`;
    document.body.innerHTML += spisak;
}

spisakKupovina(["mleko", "sok", "jaja", "brasno"]);

// Zadatak 17

let ispisImena = nizImena => {
    let tabelaImena = `<table>`;
    nizImena.forEach(elem => {
        tabelaImena += `<tr><td>${elem}</td></tr>`;
    });
    tabelaImena += `</table>`;
    document.body.innerHTML += tabelaImena;
}

ispisImena(["Pera", "Mika", "Laza", "Joca"]);

// Zadatak 18

let prikaziSlike = nizPutanja => {
    nizPutanja.forEach(elem => {
        document.body.innerHTML += `<img src="${elem}">`;
    });
}

prikaziSlike(["Slike/slika1.jpg", "Slike/slika2.jpg", "Slike/slika3.jpg"]);

// Zadatak 19

let ispisiDuzineStringova = nizStringova => {
    let duzine = "";
    nizStringova.forEach(elem => {
        duzine += elem.length + " ";
    });
    console.log(duzine);
}

ispisiDuzineStringova(["wasd", "", "123", "1234"]);

//  Zadatak 20 U nizu stringova ispisati sve elemente koji imaju:
//     - maksimalnu duzinu
//     -minimalnu duzinu
//

let imena = ["Stefan", "Nikola", "Djordje", "Milijana", "Ana", "Nenad", "Vuk", "Vladimir"];

let maxDuzinaNiza = niz => {
    let maxDuzina = niz[0].length;
    niz.forEach(elem => {
        if (elem.length > maxDuzina) {
            maxDuzina = elem.length;
        }
    });
    return maxDuzina;
}

console.log(maxDuzinaNiza(imena));

let ispisStringSvojstvo = (niz, svojstvo) => {
    let md = svojstvo(niz);
    niz.forEach(elem => {
        if (elem.length == md) {
            console.log(elem);
        }
    });
}


let minDuzinaNiza = niz => {
    let minDuzina = niz[0].length;
    niz.forEach(elem => {
        if (elem.length < minDuzina) {
            minDuzina = elem.length;
        }
    });
    return minDuzina;
}

ispisStringSvojstvo(imena, maxDuzinaNiza); // maxDuzinaNiza je callback funkcija
ispisStringSvojstvo(imena, minDuzinaNiza); // minDuzinaNiza je callback funkcija

// Zadatak 24

let zad24a = (a, b) => {
    let n = a.length; // let n = b.length; a i b su iste duzine 
    let c = [];
    for (let i = 0; i < n; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }
    return c;
}

let zad24b = (a, b) => {
    let n = a.length;
    let c =[];
    for (let i = 0; i < n; i++) {
        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];
    }
    return c;
}

let zad24c = (a, b) => {
    let n = a.length;
    let c = [];
    let j = 0;
    for (let i = 0; i < n; i++) {
        c[j++] = a[i];
        c[j++] = b[i];
    }
    return c;
}


a = [4, -9, 4, 1];
let b = [8, 8, 1, 0];

c = zad24a(a, b);
console.log(c);

c = zad24b(a, b);
console.log(c);

c = zad24c(a, b);
console.log(c);

// Zadatak 25
let zad25 = (a, b) => {
    let n = a.length;
    let c = [];
    for (let i = 0; i < n; i++) {
        c[i] = a[i] * b[i];
    }
    return c;
}

// Zadatak 26

let zad26 = a => {
    let n = a.length // n je paran broj
    let b = [];
    for (let i = 0; i < n / 2; i++) {
        b[i] = (a[i] + a[n - 1 -i]) / 2;
    }
}
