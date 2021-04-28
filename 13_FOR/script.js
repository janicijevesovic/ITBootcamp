let i;


// for (i = 1; i <= 5; i++) {
//     console.log(`Na redu je broj: ${i}`);
// }

// // Scope (Oblast vazenja)
// // let (Oblast vazenja unutar bloka ({ i }) u kojem je deklarisana)
// // var (Oblast vazenja unutar funkcije)
// /*
//     let i; // globalna promenljiva koja vazi za ceo js fajl
//     var j; // globalna promenljiva koja vazi za ceo js fajl

//     if (i != j) {
//         let k; // lokalna promenljiva koja vazi samo unutar if-a
//         let m; // globalna promenljiva koja vazi za ceo js fajl
//     }
// */

// // Ispisati parne brojeve od 1 do 20

// // Prvi nacin
// for (i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// // Drugi nacin
// for (i = 2; i <= 20; i += 2) {
//     console.log(i);
// }


// Zadatak 1. Ispisati brojeve od 1 do 20 
for (i = 1; i <= 20; i++) {
    console.log(i);
}

// Zadatak 2. Ispisati bojeve od 20 do 1
for (i = 20; i >= 1; i--) {
    console.log(i);
}

// Zadatak 3.

// Zadatak 4. Ispisati dvostruku vrednost brojeva od 5 do 15
for (i = 5; i <= 15; i++) {
    console.log(2 * i);
}

// Zadatak 5. Odrediti sumu brojeva od 1 do n
let suma = 0;
let n = 7;

for (i = 1; i <= n; i++) {
    suma += i;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}.`);

// Zadatak 6. Odrediti sumu brojeva od n do m

let m = 11;
suma = 0;
n = 5;

for (i = n; i <= m; i++) {
    suma += i;
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}.`);

// Zadatak 7. Odrediti proizvod brojeva od n do m

m = 9;
n = 5;
let proizvod = 1;

for (i = n; i <= m; i++) {
    proizvod *= i;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}.`);

// Zadatak 8. Odrediti sumu kvadrata brojeva od n do m

n = 5;
m = 9;
let sumaKvadrata = 0;

for (i = n; i <= m; i++) {
    sumaKvadrata += i ** 2;
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${sumaKvadrata}.`);

// Zadatak 9. 

let brojSlicica = 13;
for (i = 0; i < brojSlicica; i++) {
    let ost = i % 3;
    document.body.innerHTML += `<img src="${ost + 1}.jpg">`;
}

// Zadatak 10 Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.

proizvod11 = 1;
for (i = 20; i <= 100; i++) {
    if (i % 11 == 0) {
        proizvod11 *= i;
    }
}
console.log(`Proizvod brojeva deljivih sa 11, od 20 do 100 je ${proizvod11}.`);

// Drugi nacin
proizvod11 = 1;
for (i = 22; i <= 100; i += 11) {
    proizvod11 *= i;
}
console.log(`Proizvod brojeva deljivih sa 11, od 20 do 100 je ${proizvod11}.`);

// Zadatak 11 Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

let brojDeljivihSa13 = 0;

for (i = 5; i <= 150; i++) {
    if (i % 13 == 0) {
        brojDeljivihSa13 += 1;
    }
}
console.log(`Ukupan broj brojeva deljivih sa 13, od 5 do 150 je ${brojDeljivihSa13}.`);

// Zadatak 12 Ispisati aritmetičku sredinu brojeva od n do m.

n = 6;
m = 9;
suma = 0;

for (i = n; i <= m; i++) {
    suma += i;
}
let aritmetickaSredina = suma / (m - n + 1);
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je ${aritmetickaSredina} .`);

// Zadatak 13 Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.

// n = -3;
// m = 5;
// let brojNegativnih = 0;
// let brojPozitivnih = 0;

// for (i = n; i <= m; i++) {
//     if (i < 0) {

//     }
// }