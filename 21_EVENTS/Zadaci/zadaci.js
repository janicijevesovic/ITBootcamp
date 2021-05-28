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

// 5. Zadatak
// Napraviti input polje i dugme.
// U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
// DOM
let btnPosalji = document.getElementById('dugmePozdrav');
let inputIme = document.getElementById('ime');
let pPrikaziIme = document.getElementById('paragrafPozdrav');

btnPosalji.addEventListener('click', () => {
    let upisanoIme = inputIme.value;
    pPrikaziIme.innerHTML = `Zdravo ${upisanoIme}`;
});

// 6. Zadatak
// Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.
btnPosalji.addEventListener('dblclick', () => {
    let upisanoIme = inputIme.value;
    alert(`Hello ${upisanoIme}`);
});

// 5. Zadatak - drugi nacin
let inputPrezime = document.getElementById('prezime');
let btnPosaljiPrezime = document.getElementById('posaljiPrezime');
let pPrikaziPrezime = document.getElementById('prikaziPrezime');

btnPosaljiPrezime.addEventListener('click', e => {
    e.preventDefault();
    console.log(e);
    pPrikaziPrezime.innerHTML = `Uneli ste prezime ${inputPrezime.value}`;
    inputPrezime.value = "";
});


// 7. Zadatak
let inputKvadriraj = document.getElementById('brojKvadriraj');
let btnKvadriraj = document.getElementById('dugmeKvadriraj');
let pPrikaziRezultatKvadriraj = document.getElementById('prikaziRezultatKvadriraj');

btnKvadriraj.addEventListener('click', e => {
    e.preventDefault();
    pPrikaziRezultatKvadriraj.innerHTML = inputKvadriraj.value ** 2;
});

let inputPrepolovi = document.getElementById('brojPrepolovi');
let btnPrepolovi = document.getElementById('dugmePrepolovi');
let pPrikaziRezultatPrepolovi = document.getElementById('prikaziRezultatPrepolovi');

btnPrepolovi.addEventListener('click', e => {
    e.preventDefault();
    pPrikaziRezultatPrepolovi.innerHTML = inputPrepolovi.value / 2;
});

let inputPoluprecnik = document.getElementById('poluprecnik');
let btnPovrsina = document.getElementById('dugmePovrsina');
let pPrikaziRezultatPovrsina = document.getElementById('prikaziRezultatPovrsina');

btnPovrsina.addEventListener('click', e => {
    e.preventDefault();
    pPrikaziRezultatPovrsina.innerHTML = inputPoluprecnik.value ** 2 * Math.PI;
});

// Primer
let forma = document.getElementById('forma');
let inputJelo = document.getElementById('jelo');
let inuputPice = document.getElementById('pice');
let pIspis = document.getElementById('ispis');

forma.addEventListener('submit', e => {
    e.preventDefault();
    pIspis.innerHTML = `<ul>
        <li>Omiljeno jelo: ${inputJelo.value}</li>
        <li>Omiljeno pice: ${inuputPice.value}</li>
        </ul>
    `;
    forma.reset(); // resetuje sva polja u formi na koju se odnosi
});
