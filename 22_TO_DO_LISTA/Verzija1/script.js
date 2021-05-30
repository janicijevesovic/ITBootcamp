// Dohvatiti sve <li> elemente sa stranice
let sviElementiListe = document.querySelectorAll('li');

// Svakom <li> elementu iz liste dodati Event Listener
// kada se klikne na <li> precrtati tekst i obrnuto
sviElementiListe.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('precrtano');
    });
});

