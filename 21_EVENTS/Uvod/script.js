// Postupak dodavanja click eventa:
// 1. Dohvatiti dugme
let btn = document.querySelector('button');

// 2. Dodati event listener na zeljeni element (on aktivno slusa sve sto se dogadja nad tim elementom)
// btn.addEventListener('naziv eventa', funkcija koja se realizuje kada se aktivira);
btn.addEventListener('click', () => {
    console.log('Jednostruki klik');
});

////////////////////
// 1. Dohvatimo element
let dupliKlik = document.querySelector('#dupliKlik');
// let dupliKlik = document.getElementById('dupliKlik');

// 2. Dodati event listener
dupliKlik.addEventListener('dblclick', () => {
    console.log('Dvostruki klik');
});

//////////////////////////////////
// 2. nacin dodavanja event-a
function klikni() {
    console.log("Kliknuto")
}

/////////////////////////////////

