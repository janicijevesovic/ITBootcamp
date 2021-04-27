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

let n = 8;
while (n > 0) {
    document.body.innerHTML += `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`;
    n--;
}