let pr = 4;
let pr2 = 50;
if (pr < 10) {
    pr = "0" + pr;
}

if (pr2 < 10) {
    pr2 = "0" + pr2;
}

console.log(pr); // poziv funkcije log
console.log(pr2); // poziv funkcije log

// Definicija funkcije (telo funkcije)

function mojaFunkcija() {
    console.log("Zdravo svete!");
}

console.log("Neki tekst pre poziva funkcije");

// Poziv funkcije
mojaFunkcija();

console.log("Neki tekst posle poziva funkcije");

// Poziv funkcije
mojaFunkcija();
mojaFunkcija();

// Definicija druge funkcije
function ispisiTekst(tekst) {
    console.log("Ispisujem tekst: " + tekst);
}
// Pozivi funkcije
ispisiTekst("ITBootcamp"); // Prilikom poziva funkcije prosledjuje se neka vrednost
ispisiTekst('Pera Peric');
ispisiTekst(25);
let x = "Mika";
ispisiTekst(x);

console.log(x);
// console.log(tekst);

let tekst = "Zika"; // Globalna promenljiva
ispisiTekst(tekst);

console.log(tekst); // Ovo nije parametar tekst nego glovalna promenljiva

function test(x) {
    if (x % 2 == 0) {
        var y = "Paran"; // var -- Function scope (Promenjljiva vazi unutar funkcije)
    }
    else {
        let z = "Neparan"; // let -- Block scope (Promenljiva vazi unutar bloka) (Za const vazi isto kao let)
    }
    console.log(x); // 6
    console.log(y); // Paran
    console.log(z);
}

test(5);
