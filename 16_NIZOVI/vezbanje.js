// Zadatak 13. Izračunati sumu elemenata niza sa parnim indeksom

let sumaElemenataSaParnimIndeksom = nizBrojeva => {
    let suma = 0;
    for (let i = 0; i < nizBrojeva.length; i++) {
        if (i % 2 == 0) {
            suma += nizBrojeva[i];
        }
    }
    return suma;
}


// Zadatak 14. Promeniti znak svakom elementu celobrojnog niza.

let promeniZnak = nizBrojeva => {
    for (let i = 0; i < nizBrojeva.length; i++) {
        nizBrojeva[i] *= -1;
    }
    return nizBrojeva;
}



// Zadatak 15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let promeniZnakNeparnimSaParnimIndeksom = nizBrojeva => {
    for (let i = 0; i < nizBrojeva.length; i++) {
        if (nizBrojeva[i] % 2 != 0 && i % 2 == 0) {
            nizBrojeva[i] *= -1;
        }
    }
    return nizBrojeva;
}



// Zadatak 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let ispisKupovine = nizStavki => {
    let spisak = `<ul>`;
    for (let i = 0; i < nizStavki.length; i++) {
        spisak += `<li>${nizStavki[i]}</li>`;
    }
    spisak += `</ul>`;
    document.body.innerHTML += spisak;
}

// // Drugi nacin
// let namirnice = ["krema", "voce", "povrce", "mleko", "jaja"];
// namirnice[0] = "sok";
// let lista = `<ul>`;
// for (let i = 0; i < namirnice.length; i++) {
//     lista += `<li> ${namirnice[i]} </li>`;
// }
// lista += `</ul>`;
// namirnice[0] = "hleb";
// document.body.innerHTML += lista;

// Zadatak 17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let ispisKosarka = nizImena => {
    let tabela = `<table>`;
    for (let i = 0; i < nizImena.length; i++) {
        tabela += `
            <tr>
                <td>${nizImena[i]}</td>
            </tr>
        `;
    }
    tabela += `</table>`;
    document.body.innerHTML += tabela;
}



// Zadatak 18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let dodajSlike = nizPutanja => {
    for (let i = 0; i < nizPutanja.length; i++) {
        document.body.innerHTML += `<img src="${nizPutanja[i]}">`;
    }
}

dodajSlike(["Slike/slika1.jpg", "Slike/slika2.jpg", "Slike/slika3.jpg"]);

///////////////

// let rec = "abcdefg";
// console.log(rec.length);
// console.log(rec[0]);
// console.log(rec[5]);

// for (let i = 0; i < rec.length; i++) {
//     console.log(rec[i]);
// }


// Zadatak 19. Ispisati dužinu svakog elementa u nizu stringova.

let ispisiDuzine = nizStringova => {
    let duzine = "";
    for (let i = 0; i < nizStringova.length; i++) {
        duzine += `${nizStringova[i].length} `;
    }
    return duzine;
}

// Zadatak 20. Odrediti element u nizu stringova sa najvećom dužinom.

let najduziElement = nizStringova => {
  let najduziElement = nizStringova[0];
  let indeks = 0;
  for (let i = 1; i < nizStringova.length; i++) {
      if (nizStringova[i].length >= najduziElement.length) {
          najduziElement = nizStringova[i];
          indeks = i;
      }
  }
  return [najduziElement, indeks];
}


// Zadatak 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let stringovi = ["Ana", "Milica", "Jelena"];
let sumaDuzina = 0;
for (let i = 0; i < stringovi.length; i++) {
    sumaDuzina += stringovi[i].length;
}
let arSrDuzina = sumaDuzina / stringovi.length;


let brojNatprosecnih = 0;
for (let i = 0; i < stringovi.length; i++) {
    if (stringovi[i].length > arSrDuzina) {
        brojNatprosecnih += 1;
    }
}


// Zadatak 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

// 1. NACIN
// rec.includes("a") - vraca true ukoliko rec sadrzi slovo "a" u suprotnom vraca false
let brStringovaSaSlovomA = 0;
for (let i = 0; i < stringovi.length; i++) {
    let rec = stringovi[i];
    if (rec.includes("a") || rec.includes("A")) {
        brStringovaSaSlovomA += 1;
    }
}


// 2. NACIN
let brStringovaSaSlovomA2 = 0;
// Ova for petlja ide element po element u nizu
for (let i = 0; i < stringovi.length; i++) {
    let rec = stringovi[i];
    // Ova for petlja ide slovo po slovo u reci
    for (let j = 0; j < rec.length; j++) {
        // rec[j] je karakter u reci (slovo u reci)
        if (rec[j] == "a" || rec[j] == "A") {
            brStringovaSaSlovomA2 += 1;
            break; // j = rec.length;
        }
    }
}

// Zadatak 23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.

let pocinjeSaA = nizStringova => {
    let brojElemenata = 0;
    for (let i = 0; i < nizStringova.length; i++) {
        if (nizStringova[i][0] == "a" || nizStringova[i][0] == "A") {
            brojElemenata += 1;
        }
    }
    return brojElemenata;
}

// Zadatak 24. 

let formirajNizC = (nizA, nizB) => {
    let nizC = [];
    for (let i = 0; i < nizA.length; i++) {
        nizC.push(nizA[i], nizB[i]);
    }
    return nizC;
}

console.log(formirajNizC([-1, 3, 6], [2, 4, -5]));

// Zadatak 25.

let formirajNizC2 = (nizA, nizB) => {
    let nizC2 = [];
    for (let i = 0; i < nizA.length; i++) {
        nizC2.push(nizA[i] * nizB[i]);
    }
    return nizC2;
}

console.log(formirajNizC2([-1, 3, 6], [2, 4, -5]));

// Zadatak 26.

let formirajNizB = nizA => {
    let nizB = [];
    for (let i = 0; i < nizA.length / 2; i++) {
        nizB.push((nizA[i] + nizA[nizA.length - 1 - i]) / 2);
    }
    return nizB;
}

console.log(formirajNizB([-6, 5, 3, 13, 5, 7]));

