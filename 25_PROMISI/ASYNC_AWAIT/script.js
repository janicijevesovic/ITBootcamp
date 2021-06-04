// fetch vraca promise - asocijacija na promise je then i catch
// upada u catch granu samo ako je doslo do network error-a
// Sled od 4 koraka:
    // 1. fetch .json fajla
    // 2. return response.json() koji je promise
    // 3. uzeti podatke iz response.json
    // 4. catch error

fetch("../JSON/todos.json").then(response => {
    // response je objekat koji nosi sa sobom veliki broj atributa
    console.log("Resolved", response);
    return response.json(); // response.json() je promise i zbog toga opet moramo da radimo then i catch
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log("Rejected", err);
});

// Async & Await

// Asinhrona funkcija se prosledjuje kao parametar i ima zagrade ()
// Ashinrona funkcija ispred () mora da ima async
// Kao rezultat vraca promise
let getTodos = async() => {
    let response = await fetch("../JSON/todos.json");
     // fetch vraca response zbog cega smo ranije koristili than i catch
     // await - Cekaj / Zaustavi izvrsvanje koda u ovoj niti dokle god se ne izvrsi komanda koja je iza await
     // Await iskljucivo u asinhronoj funkciji
     // console.log(response);

     // Ispitivanje statusa
     if (response.status != 200) {
        throw new Error("Ne mogu da dohvatim podatke");
     }
     else {
        let data = await response.json(); // response.json() vraca promise
     }
    
     // Sa ovim delom krece tek kada su izvrsene prethodne linije u potpunosti
     response = await fetch("../JSON/fruits.json");
     data = await response.json();

     return data; // vracam promise, sto znaci da cu za njega morati da radim .then i .catch
}

console.log(1);
console.log(2);
getTodos()
    .then(data => console.log('Resolved', data))
    .catch(err => console.log('Rejeceted', err));
console.log(3);
console.log(4);