console.log("IF naredba grananja");

let a = 70;
let b = 10;

if (a < b) {
    console.log("a je manje od b");
}

console.log("IF je zavrsen");

let x = 15;
let y = 15;

if (x == y) {
    console.log("Brojevi x = " + x + " i y = "  + y + " su jednaki");
    console.log(`Brojevi x = ${x} i y = ${y} su jednaki`);
}

let x1 = "15";
// == poredi samo po vrednosti
if (x == x1) {
    console.log(`Brojevi x i x1 imaju istu vrednost`);
}

//  === poredi po tipu i po vrednosti
if (x === x1) {
    console.log(`Brojevi x i x1 imaju isti tip i istu vrednost`);
    //x i x1 imaju istu vrednost to je 15, medjutim nemaju isti tip. x je tipa number dok je x1 tipa string
}

//
