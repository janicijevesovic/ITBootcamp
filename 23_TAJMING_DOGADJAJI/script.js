/*
function test() {
    console.log("Pozvana je funkcija test");
}

console.log("Prva linija koda");
console.log("Druga linija koda");
// window.setTimeout(......);
setTimeout(test, 3000); // test je callback funkcija
console.log("Cetvrta linija koda");
console.log("Peta linija koda");
*/

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

btn1.addEventListener('click', function() { // anonimna callback f-ja
    console.log(this);
});

btn2.addEventListener('click', () => { // arrow callback f-ja
    console.log(this);
});

btn3.addEventListener('click', klik); // imenovana callback f-ja

function klik () {
    console.log(this);
}

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let divIspis = document.getElementById('ispis');
let clock = null;

b1.addEventListener('click', () => {
    if (clock === null) {
        clock = setTimeout(function() {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekundi = datum.getSeconds();
            divIspis.textContent = `${sati}:${minuti}:${sekundi}`;
        }, 1000);
    }
});

b2.addEventListener('click', () => {
    clearTimeout(clock);
    clock = null;
});
