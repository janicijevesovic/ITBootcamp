// 1. Zadatak
// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac = document.querySelector('#brojac');
let br = 1;
btnBrojac.addEventListener('click', () => {
    console.log(br);
    br += 1;
});

// 2. Zadatak
// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.

let btnBrojac2 = document.getElementById('brojac2');
let paragrafZaIspis = document.getElementById('ispisBrojaca2');
let br2 = 0;
paragrafZaIspis.innerHTML = br2; // Kada definisemo br1, ispisemo njegovu vrednost na ekranu

btnBrojac2.addEventListener('click', () => {
    br2 += 1;
    //paragrafZaIspis.innerHTML += ` ${br2}`;
    paragrafZaIspis.textContent = br2;
});

// 3. Zadatak
// Napraviti dugme + i dugme -. 
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

// 4. Zadatak
// Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.
// DOM
let spanZaIspis = document.getElementById('spanIspis');
let dugmeMinus = document.getElementById('dugmeMinus');
let dugmePlus = document.getElementById('dugmePlus');

let br3 = 0;
spanZaIspis.innerHTML = br3;

dugmeMinus.addEventListener('click', () => {
    spanZaIspis.style.color = "black";
    if (spanZaIspis.innerHTML == "0") {
        br3 = 0;
        spanZaIspis.style.color = "green";
    }
    else {
        br3 -= 1;
    }
    spanZaIspis.innerHTML = br3;
});

dugmePlus.addEventListener('click', () => {
    spanZaIspis.style.color = "black";
    br3 += 1;
    spanZaIspis.innerHTML = br3;
});