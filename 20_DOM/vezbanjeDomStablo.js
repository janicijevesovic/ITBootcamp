let parniParagrafi = document.querySelectorAll("p:nth-of-type(even)");
parniParagrafi.forEach(paragraf => {
    paragraf.classList.toggle('error');
});

let neparniParagrafi = document.querySelectorAll("p:nth-of-type(odd)");
neparniParagrafi.forEach(paragraf => {
    paragraf.classList.toggle('success');
});

let paragrafi = document.querySelectorAll("p");
paragrafi.forEach(paragraf => {
    if (paragraf.textContent.includes('error')) {
        paragraf.classList.add('error');
    }
    else if (paragraf.textContent.includes('success')) {
        paragraf.classList.add('success');
    }
});