// Zadatak 6. Odrediti sumu brojeva od 1 do 100

let n = 100;
let suma = 0;
while (n > 0) {
    suma += n;
    n--;
}
console.log(suma);

// Zadatak 7. Odrediti sumu brojeva od 1 do n

n = 20;
suma = 0;
while (n > 0) {
    suma += n;
    n--;
}
console.log(suma);

// Zadatak 8. Odrediti sumu brojeva od n do m

n = 3;
suma = 0;
let m = 9;

while (n <= m) {
    suma += n;
    n++;
}
console.log(suma);

// Zadatak 9. Odrediti proizvod brojeva od n do m

n = 2;
m = 7;
let proizvod = 1;
while (n <= m) {
    proizvod *= n;
    n++;
}
console.log(proizvod);

// Zadatak 10. Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 2;
m = 6;
let sumaKvadrata = 0;
let sumaKubova = 0;

while (n <= m) {
    if (n % 2 == 0) {
        sumaKvadrata += n ** 2;
    }
    else {
        sumaKubova += n ** 3;
    }
    n++;
}
console.log(`Suma kvadrata parnih je ${sumaKvadrata}.`);
console.log(`Suma kubova neparnih je ${sumaKubova}.`);

//  Zadatak 11. Odrediti sa koliko brojeva je deljiv uneti broj k

let k = 10;
let brojDelilaca = 0;
let i = 1;
while (i <= k) {
    if (k % i == 0) {
        brojDelilaca += 1;
    }
    i += 1;
}
console.log(`Broj delilaca broja ${k} je ${brojDelilaca}.`);

// Zadatak 12. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

n = 37; // Broj cija parnost se ispituje
i = 2; // Brojac koji ide po potencijalnim deliocima broja n

// Prvi nacin
while (i < n) {
    if (n % i == 0) {
        console.log(`Broj ${n} nije prost.`);
        break;
    }
    i++;
}
if (i == n) {
    console.log(`Broj ${n} je prost.`);
}

// Drugi nacin
n = 20; 
while (i <= n / 2 ) {
    if (n % i == 0) {
        console.log(`Broj ${n} nije prost.`);
        break; // Prekida izvrsenje petlje u kojoj se nasao
    }
    i++;
}
if (i > n / 2) {
    console.log(`Broj ${n} je prost.`);
}


// Treci nacin
n = 4; // Broj cija se parnost ispituje
i = 2; // Brojac po potencijalnim deliocima broja n
let prime = true; // Indikator (flag) da li je broj n prost
while (prime && (i <= n / 2)) {
    if (n % i == 0) {
        prime = false;
    }
    i++;
}
if (prime) {
    console.log(`Broj ${n} je prost.`);
}
else {
    console.log(`Broj ${n} nije prost.`);
}