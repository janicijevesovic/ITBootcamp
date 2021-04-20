console.log(3);
console.log(-15.3867);

console.log("Proizvoljan tekst");
console.log('Jos jedan tekst');
console.log("Mark's pen");
console.log('Mark"s pen');
console.log('Mark\'s Pen');
console.log("Mark\"s Pen");

console.log("-15.3867");


console.log(3 + 5); // + radi kao sabiranje brojeva
console.log("3" + "5"); // + radi kao konkatenacija stringova
console.log(3 + "5"); // broj 3 se konvertuje u string "3", pa se vrsi konkatenacija stringova


console.log(true); //logicka vrednost true (tacno)
console.log(false); //logicka vrednost false (netacno)

let x; // Deklarisanje promenljive x
console.log("tralala");
x = 3; // x dobija vrednost 3

console.log(x);

x = 5;
console.log(x);

x = "Pera Zdera";

let y = true;
y = 0.5;

console.log(x, y);

const pi = 3.14;
console.log(pi);

// pi = 3.1415; // Ne mozemo ponovo dodeliti vrednost konstanti
// const pi = 3.1415; // Ne mozemo ponovo deklarisati konstantu

let a;
console.log(a); //undefined vrednost promenljive

//console.log(b); //nedefinisana promenljiva
let recenica = "JS kaze: \" Hello world! \"";
console.log(recenica);

recenica = `JS kaze: " Ili kupi alat, il' ostavi zanat! " `;
console.log(recenica);

let god;
console.log(god, god + 3); // undefiened, NaN - Not a Number

let god1 = null;
console.log(god1, god1 + 3)

// Konkatenacija stringova
let ime = "Janicije";
let prezime = "Vesovic";
let imePrezime = ime + " " + prezime; // + kada koristimo reci on vrsi konkatenaciju tj. nadovezuje reci
console.log(imePrezime);
console.log(ime.length + prezime.length); // + kada koristimo brojeve on vrsi sabiranje brojeva

// Osnovne aritmeticke operacijue
let p = 7;
let q = 3;

let zbir = p + q;
console.log(zbir);

let razlika = p - q;
console.log(razlika);

let proizvod = p * q;
console.log(proizvod);

let kolicnik = p / q;
console.log(kolicnik);

//+=, -=, *=, /=
p += 3; // ekvivalentno p = p + 3;
console.log(p); // 10

p -= 5; // ekvivalentno p = p - 5;
console.log(p); // 5

//++ inkrementacija
console.log(p);
p++;
console.log(p);

let r = 50;
console.log(r++); //50 // prvo ispise r pa ga poveca za +1 (u ovoj liniji ne vidimo povecanje)
console.log(r); //51 povecao je nakon prethodne linije

let k = 50;
console.log(++k); // 51 // ++k prvo poveca pa onda ispise (u ovoj liniji odmah vidimo povecanje)

/*
    7 / 3 = 2 (+ ost. 1)
*/

x = 7;
y = 3;
let ost = 7 % 3; // Racunanje ostatka pri deljenju
console.log(ost);

let stepen = y ** 4;
console.log(stepen); //Stepenovanje

let x1 = "godina";
let y1 = "prestupna";
console.log(x1 + " " + y1);

let rezultat = 26 + "godina"; // Nadovezuje kao da su dva stringa u pitanju
console.log(rezultat);

let rezultat1 = "26" + "godina";
console.log(rezultat1);

let rezultat3 = 26 + 1 + "godina" ; // Prvo sabere 26 + 1 i onda tek nadoveze rec godina
console.log(rezultat3);

let rezultat4 = 26 + "godina" + 1;
console.log(rezultat4);

let rezultat5 = "26" + "1" + "godina";
console.log(rezultat5);


let rezultat6 = 26 / "godina";
console.log(rezultat6); //NaN