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


// Zadatak 15 Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.

n = -10;
m = 24;
suma = 0;
let brojSaPoslednjomCifrom4 = 0;

for (i = n; i <= m; i++) {
    if (i % 10 == 4 || i % 10 == -4) {
        suma += i;
        brojSaPoslednjomCifrom4 += 1;
    }
}
console.log(`Suma brojeva od ${n} do ${m} kojima je poslednja cifra 4 je ${suma}.`);
console.log(`Broj brojeva od ${n} do ${m} kojima je poslednja cifra 4 je ${brojSaPoslednjomCifrom4}.`);

// Zadatak 16 Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n = 6;
m = 12;
suma = 0;
let a = 2;

for (i = n; i <= m; i++) {
    if (i % a != 0) {
        suma += i;
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}.`);

// Zadatak 13 Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.

n = -5;
m = 3;
let brojNegativnih = 0;
let brojPozitivnih = 0;

for (i = n; i <= m; i++) {
    if (i < 0) {
        brojNegativnih += 1;
    }
    else if (i > 0) {
        brojPozitivnih += 1;
    }
}
console.log(`Broj negativnih brojeva izmedju ${n} i ${m} je ${brojNegativnih}, a pozitivnih ${brojPozitivnih}.`);

// Zadatak 14 Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.

let brojDeljivihSa3Ili5 = 0;

for (i = 5; i <= 50; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        brojDeljivihSa3Ili5 += 1;
    }
}
console.log(`Broj brojeva izmedju 5 i 50 koji su deljivi sa 3 ili sa 5 je ${brojDeljivihSa3Ili5}`);

// Zadatak 17 Odrediti proizvod brojeva od n do m koji su deljivi brojem a

let proizvodDeljivihSaA = 1;
n = 10;
m = 21;
a = 5;

for (i = n; i <= m; i++) {
    if (i % a == 0) {
        proizvodDeljivihSaA *= i;
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je ${proizvodDeljivihSaA}`);

// Zadatak 18
/*
<table>
    <tr>
        <td>Teskt</td>
        <td>Teskt</td>
    </tr>
    <tr>
        <td>Teskt</td>
        <td>Teskt</td>
    </tr>
    ...
</table>
*/


// Zadatak 18.

// I nacin
let redovi = 6;
let tabela = `<table>`;
for (i = 1; i <= redovi; i++) {
    if (i % 2 == 0) {
        tabela +=`<tr class="boja1">`;
    }
    else {
        tabela +=`<tr class="boja2">`;
    }
    tabela += 
        `
                <td>Tekst</td>
                <td>Tekst</td>
            <tr>
    `;
}
tabela += `</table>`;
document.body.innerHTML += tabela;

//////////////////

let element = document.getElementById("naslov");
element.innerHTML += "*****23";
// element.innerHTML = "****" + element.innerHTML; // Ako zelimo da dodamo zvezdice pre 

///////////////////

// II nacin

let htmlTabela = document.getElementById("mojaTabela");
for (i = 1; i <= redovi; i++) {
    if (i % 2 == 0) {
    htmlTabela.innerHTML +=
    `
        <tr class="boja1">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
    `;
    }
    else {
        htmlTabela.innerHTML +=
        `
            <tr class="boja2">
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
        `;
    }
}


// Zadatak 19.

let brLI = 10;
let lista = `<ul>`;
for (i = 1; i <= brLI; i++) {
    lista += `<li> Element ${i}`;
    if(i % 3 == 2) {
        i++;
        lista += 
        `
        <ul>
            <li class="ljubicasti"> Element ${i} </li>
        </ul>
        `;
    }
    lista += `</li>`;
    
}
lista += `</ul>`;
document.body.innerHTML += lista;

// Drugi nacin

let lista1 = `<ul>`;
for (i = 1; i <= brLI; i++) {
    if (i % 3 == 0) {
        lista1 +=
        `
        <ul>
            <li class="ljubicasti"> Element ${i}</li>
        </ul>
        `;
    }
    else {
        lista1 += `<li>Element ${i}</li>`;
    }
}
lista1 += `</ul>`;
document.body.innerHTML += lista1;

// Zadatak 20

for (i = 1; i <= 64; i++) {
    document.body.innerHTML += `<span>${i}</span>`;
    if (i % 8 == 0) {
        document.body.innerHTML += `<br>`;
    }
}

