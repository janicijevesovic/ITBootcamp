// Zadatak 1
let parniParagrafi = document.querySelectorAll("p:nth-of-type(even)");
parniParagrafi.forEach(paragraf => {
    paragraf.classList.toggle('error');
});

let neparniParagrafi = document.querySelectorAll("p:nth-of-type(odd)");
neparniParagrafi.forEach(paragraf => {
    paragraf.classList.toggle('success');
});

//Zadatak 2
let paragrafi = document.querySelectorAll("p");
paragrafi.forEach((paragraf, indeks) => {
    if (indeks % 3 == 0) {
        paragraf.style.fontSize = "15px";
    }
    else if (indeks % 3 == 1) {
        paragraf.style.fontSize = "20px";
    }
    else {
        paragraf.style.fontSize = "25px";
    }
});

// Zadatak 3
paragrafi.forEach(paragraf => {
    if (paragraf.textContent.includes('error')) {
        paragraf.classList.add('error');
    }
    else if (paragraf.textContent.includes('success')) {
        paragraf.classList.add('success');
    }
});

// Zadatak 4
paragrafi.forEach(paragraf => {
    if (paragraf.classList.contains('error')) {
        paragraf.classList.remove('error');
    }
    else {
        paragraf.classList.add('error');
    }
});