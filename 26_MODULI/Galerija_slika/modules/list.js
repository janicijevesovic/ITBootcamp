let generateList = parent => {
    let novaLista = document.createElement('ul');
    parent.appendChild(novaLista);
}

let generateListItem = (parent, src) => {
    let noviElement = document.createElement('li');
    let novaSlika = document.createElement('img');
    novaSlika.src = src;
    novaSlika.alt = "Pejzaz";
    noviElement.appendChild(novaSlika);
    parent.appendChild(noviElement);
}

export{generateList, generateListItem}