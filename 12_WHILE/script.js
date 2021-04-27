
/*
// Ispis brojeva od 1 do 5

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

console.log(`Vrednost promenljive i nakon while petlje jednaka je ${i}.`);
*/

// Zadatak 1

let i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}

let rezultat = "";
i = 1;
while (i <= 20) {
    rezultat += i + " ";
    i++;
}
console.log(rezultat);

// Zadatak 2

i = 20;
while (i > 0) {
    console.log(i);
    i--;
}

// Zadatak 3

i = 1;
while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

// Zadatak 4

/* Moj nacin
let n = 8;
while (n > 0) {
    document.body.innerHTML += `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`;
    n--;
}
*/

// Kod sa casa
document.body.innerHTML += `<h1>While petlja</h1>`;
i = 1;
let n = 5;
while (i <= n) {
    /*
    0 % 3 = 0
    1 % 3 = 1
    2 % 3 = 2
    3 % 3 = 0
    4 % 3 = 1
    ...
    */
   if (i % 3 == 1) {
        document.body.innerHTML += `<p style="color: red;">Ovo je ${i}. paragraf.</p>`;
   }
   else if (i % 3 == 2) {
        document.body.innerHTML += `<p style="color: green;">Ovo je ${i}. paragraf.</p>`;
   }
   else {
        document.body.innerHTML += `<p style="color: blue;">Ovo je ${i}. paragraf.</p>`;
   }
    i += 1;
}


// Zadatak 5 Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

i = 1;
n = 6;

while (i <= n) {
    /*
    1 % 2 = 1
    2 % 2 = 0
    3 % 2 = 1
    4 % 2 = 0
    5 % 2 = 1
    ...
    */
   if (i % 2 == 1) {
        document.body.innerHTML += `<img src="sun.png" class="okvir1">`;
   }
   else {
        document.body.innerHTML += `<img src="sun.png" class="okvir2">`;
   }
    i += 1;
}

// Ciklicno prikazivanje tri slike
i = 1;
n = 7;

while (i <= n) {
    let ost = i % 3;
    document.body.innerHTML += `<img src="slike/${ost}.jpg">`;
    i += 1;
}


// Odrediti sumu brojeva od 1 do 5

i = 1;
let suma = 0; // Neutral za sabiranje je pocetna vrednost
n = 5;
while (i <= n) {
    suma += i;
    i += 1;
}
console.log(suma);

// 1, 2, 3, 4, 5 -> 5*(5+1) / 2 = 30 / 2 = 15

// Formula za sumiranje brojeva iskljucivo OD 1 do N
let suma1 = n * (n + 1) / 2
console.log(suma1);

/*
Odrediti proizvod brojeva od 1 do 5
*/

i = 1;
let proizvod = 1; // Neutral za mnozenje je pocetna vrednost
n = 5;
while (i <= n) {
    proizvod *= i;
    i += 1;
}
console.log(proizvod);