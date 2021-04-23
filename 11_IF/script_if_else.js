let a = 7;
let b = 8;

// 1. nacin
if (a == b) {
    console.log("a i b su jednake vrednosti.");
}
else {
    console.log("a i b nisu jednake vrednosti.");
}

// 2. nacin
if (a != b) {
    console.log("a i b nisu jedanke vrednosti");
}
else {
    console.log("a i b jesu jednake vrednosti");
}

// Dodavanje HTML elementa iz script fajla
document.body.innerHTML = "<h1>Ovo je <i>if-else</i> naredba grananja</h1>";
document.body.innerHTML += "<h3>Zadaci</h3>";
// Ukoliko dodamo samo otvoren tag, automatski ce ga zatvoriti (i obrnuto - automatski otvara zatvoren tag)
// document.body.innerHTML += "<p>";
// document.body.innerHTML += "Zadaci za vezbanje...";
// document.body.innerHTML += "</p>";

let v = 2021;
document.body.innerHTML += 
`<p>
    Hello...
    <span>world</span><br>
    Godina je ${v} :)
</p>`;

let slika = "flower.png";
document.body.innerHTML += `<img src="${slika}">`;

//  IF - Else IF - Else
let broj = 10;

if (broj < 0) {
    console.log("Broj je manji od nule.");
}
else if (broj == 0) {
    console.log("Broj je jednak nuli.");
}
else {
    console.log("Broj je veci od nule.");
}
console.log("KRAJ");