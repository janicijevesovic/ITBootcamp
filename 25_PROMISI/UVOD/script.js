// 1. Kreiranje XML objekta
let request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        // Ako je sve OK
        console.log(request.responseText);
    }
    else if (request.readyState === 4) {
        console.log("Ne mogu da dohvatim podatke");
    }
});

// 2. Otvaranje kreiranog zahteva
request.open('GET', './JSON/todos.json');

// 3. Saljemo request
request.send();


// PRIMER CALLBACK FUNKCIJE
// Funkcija myFunc prima kao parametar drugu funkciju (callbackFunction)
// myFunc moze da poziva funkciju koja joj je prosledjena kao parametar i da joj prosledjuje argumente
let myFunc = callbackFunction => {
    let value = 5;
    callbackFunction(value);
}

// Kada pozivamo funkciju myFunc ona ocekuje da joj se prosledi druga funkcija
// tj mi joj prosledjujemo realizaciju callbackFunction funkcije (telo funkcije)
myFunc(value => {
    console.log(value);
});