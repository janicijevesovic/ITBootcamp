// Zadatak 3

let neparan = (n) => {
    if (n % 2 == 1) {
        return true;
    }
    else {
        return false;
    }
}

let neparan2 = n => (n % 2 == 1) ? true : false;
let neparan3 = n => (n % 2 == 1);

// Zadatak 4

let maks2 = (a, b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
    // ???? return if (a > b) {a} else {b}
}

let max2 = (a, b) => (a > b) ? a : b; // 1 ? 2 : 3


let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));


// Zadatak 5

let prikaziSliku = (adresa) => { // Prvi nacin
    return `<img src="${adresa}">`;
}

// Drugi nacin
let prikaziSliku2 = adresa => `<img src="${adresa}">`;


document.body.innerHTML += prikaziSliku("https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg");
document.body.innerHTML += prikaziSliku2("https://pbs.twimg.com/profile_images/883859744498176000/pjEHfbdn_400x400.jpg");

// Zadatak 6

let obojiParagraf = (boja) => {
    document.body.innerHTML += `<p style="color:${boja}">Ovaj paragraf je obojen uz pomoc JS-a.</p>`;
}

obojiParagraf("green");

// Zadatak 7

let sedmiDan = (n) => {
    let ostatak = n % 7;
    switch (ostatak) {
        case 0:
            console.log("Nedelja");
            break;
        case 1:
            console.log("Ponedeljak");
            break;
        case 2:
            console.log("Utorak");
            break;
        case 3:
            console.log("Sreda");
            break;
        case 4:
            console.log("Cetvrtak");
            break;
        case 5:
            console.log("Petak");
            break;
        case 6:
            console.log("Subota");
            break;
        default:
            console.log("Pogresan unos");
    }
}


// Zadatak 8

let deljivSaTri = (n, m) => {
    let brojBrojeva = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            brojBrojeva += 1;
        }
    }
    return brojBrojeva;
}

// Zadatak 9

let sumiraj = (n, m) => {
    let suma = 0;
    for (let i = n; i <= m; i++) {
        suma += i;
    }
    return suma;
}

// Zadatak 10

let mnozi = (n, m) => {
    let proizvod = 1;
    for (let i = n; i <= m; i++) {
        proizvod *= i;
    }
    return proizvod;
}

// Zadatak 15

let plata = (n, a) => {
    let d = 8000;
    let suma = a;
    for (let i = 2; i <= n; i++) {
        a += d;
        suma += a;
    }
    return suma;
}

console.log(plata(4, 15000));

// Zadatak 16