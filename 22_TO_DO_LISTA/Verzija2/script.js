let listaObaveza = document.getElementById('listaObaveza');
// let dugmeDodaj = document.getElementById('dugmeDodaj');
let inputObaveza = document.getElementById('inputObaveza');
let stavkeListe = document.querySelectorAll('li');


let dodajPocetak = document.getElementById('pocetak');
let dodajKraj = document.getElementById('kraj');


// dugmeDodaj.addEventListener('click', () => {
//     let noviElement = document.createElement('li');
//     if (inputObaveza.value == "") {
//         alert('Unesite obavezu')
//     }
//     else {
//         if (dodajPocetak.checked) {
//             noviElement.textContent = inputObaveza.value;
//             listaObaveza.prepend(noviElement);
//         }
//         else if (dodajKraj.checked) {
//             noviElement.textContent = inputObaveza.value;
//             listaObaveza.append(noviElement);
//         }
//         inputObaveza.value = "";
//     }
// });

inputObaveza.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        let noviElement = document.createElement('li');
        if (inputObaveza.value == "") {
            alert('Unesite obavezu')
        }
        else {
            if (dodajPocetak.checked) {
                noviElement.textContent = inputObaveza.value;
                listaObaveza.prepend(noviElement);
            }
            else if (dodajKraj.checked) {
                noviElement.textContent = inputObaveza.value;
                listaObaveza.append(noviElement);
            }
            inputObaveza.value = "";
        }
    }
})


stavkeListe.forEach(stavka => {
    stavka.addEventListener('click', () => {
        stavka.remove();
    });
});
