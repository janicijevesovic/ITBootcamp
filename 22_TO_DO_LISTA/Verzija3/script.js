let listaObaveza = document.getElementById('listaObaveza');
let inputObaveza = document.getElementById('inputObaveza');
let stavkeListe = document.querySelectorAll('li');


let dodajPocetak = document.getElementById('pocetak');
let dodajKraj = document.getElementById('kraj');

listaObaveza.addEventListener('click', e => {
    if (e.target.tagName == "LI") {
        e.target.remove();
    }
});

inputObaveza.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        if (inputObaveza.value == "") {
            alert('Unesite obavezu')
        }
        else {
            let noviElement = document.createElement('li');
            noviElement.textContent = inputObaveza.value;
            if (dodajPocetak.checked) {
                listaObaveza.prepend(noviElement);
            }
            else if (dodajKraj.checked) {
                listaObaveza.append(noviElement);
            }
            inputObaveza.value = "";
        }
    }
});

