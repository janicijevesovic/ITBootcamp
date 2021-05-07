// Zadatak 3

function neparan(n) {
    if (n % 2 == 1) {
        return true;
    }
    else {
        return false;
    }
}

// Zadatak 4

function maks2(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

function maks4(a, b, c, d) {
    if (maks2(a, b) > (maks2(c, d))) {
        return maks2 (a, b);
    }
    else {
        return maks2 (c, d);
    }
}

function maks4DN(a, b, c, d) { // Drugi nacin
    return maks2(maks2(a, b), maks2(c, d));
}

function maks4TN(a, b, c, d) { // Treci nacin
    let m1 = maks2(a,b); // max {a, b}
    let m2 = maks2(m1, c); // max {a, b, c}
    let m3 = maks2(m2, b); // max {a, b, c, d}
    return m3;
}

// Zadatak 5

function prikaziSliku(adresa) {
    document.body.innerHTML += `<img src="${adresa}">`;
}

prikaziSliku("https://spaceplace.nasa.gov/templates/featured/sun/sunburn300.png");

// Zadatak 6

function obojiParagraf(boja) {
    document.getElementById("paragraf").style.color = boja;
}



// Zadatak 7

function sedmiDan(n) {
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
    }
}

// Zadatak 8

function deljivSaTri(n, m) {
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

function sumiraj(n, m) {
    let suma = 0;
    for (let i = n; i <= m; i++) {
        suma += i;
    }
    return suma;
}

// Zadatak 10

function mnozi(n, m) {
    let proizvod = 1;
    for (let i = n; i <= m; i++) {
        proizvod *= i;
    }
    return proizvod;
}
