let divOrder = document.querySelector("#order");
let formOrder = document.querySelector("#order form");
let inputOrder = document.querySelector("#capacity");
let divTabela = document.querySelector("#tabela");

function getItems(resource, func) {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            func(data);
        }
        else if (this.readyState == 4) {
            console.log("Could not fetch data");
        }
    });
    request.open('GET', resource);
    request.send();
}

let click1 = event => {
    event.preventDefault();
    let capacity = inputOrder.value;
    //console.log(capacity);

    let itemsNoStock = [];
    getItems("./JSON/stock.json", data => {
        // Logika da se dohvate objekti koji nisu na stanju
        data.forEach(item => {
            if (item.stock == 0) {
                itemsNoStock.push(item.id);
            }
        });
        // console.log(itemsNoStock);
        getItems("./JSON/weights.json", data => {
            // Logika da se dohvate tezine artikala
            let totalWeight = 0;
            data.forEach(item => {
                // Da li niz itemsNoStock sadrzi item.id
                if (itemsNoStock.includes(item.id)) {
                    // Potrebna je tezina artikla
                    totalWeight += item.weight;
                }
            });
            // console.log(totalWeight);
            if (totalWeight > capacity) {
                let pMessage = document.createElement('p');
                pMessage.style.fontWeight = "bold";
                pMessage.style.fontSize = "24px";
                pMessage.textContent = "Not enough capacity in truck!";
                divOrder.appendChild(pMessage);
            }
            else {
                getItems("./JSON/prices.json", data => {
                    // Logika za cene artikala
                    let totalPrice = 0;
                    data.forEach(item => {
                        if (itemsNoStock.includes(item.id)) {
                            totalPrice += item.price;
                        }
                    });
                    let pMessage = document.createElement('p');
                    pMessage.style.fontWeight = "bold";
                    pMessage.style.fontSize = "24px";
                    pMessage.textContent = `Total order price: ${totalPrice}RSD`;
                    divOrder.appendChild(pMessage);
                });
            }
        });
    });
}

// Funkcija click1 je tacna ali neprakticna (callback hell)
// formOrder.addEventListener('submit', click1);

// Promis je objekat koji "ceka" asinhroni poziv
// Zahvaljujuci njemu, postoje then() i catch() metode
function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function () {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);
                resolve(data);
            }
            else if (this.readyState == 4) {
                reject("Could not fetch data!");
            }
        });
        request.open('GET', resource);
        request.send();
    });
}

let click2 = event => {
    event.preventDefault();
    let capacity = inputOrder.value;
    let itemsNoStock = [];
    getItemsReturnPromise("./JSON/stock.json")
        .then(data => {
            data.forEach(item => {
                if (item.stock == 0) {
                    itemsNoStock.push(item.id);
                }
            });
            return getItemsReturnPromise("./JSON/weights.json");
        }).then(data => {
            let totalWeight = 0;
            data.forEach(item => {
                // Da li niz itemsNoStock sadrzi item.id
                if (itemsNoStock.includes(item.id)) {
                    // Potrebna je tezina artikla
                    totalWeight += item.weight;
                }
            });
            // console.log(totalWeight);
            if (totalWeight > capacity) {
                let pMessage = document.createElement('p');
                pMessage.style.fontWeight = "bold";
                pMessage.style.fontSize = "24px";
                pMessage.textContent = "Not enough capacity in truck!";
                divOrder.appendChild(pMessage);
            }
            else {
                return getItemsReturnPromise("./JSON/prices.json");
            }
        }).then(data => {
            if (data !== undefined) {
                let totalPrice = 0;
                let tabela = document.createElement('table');
            data.forEach(item => {
                if (itemsNoStock.includes(item.id)) {
                    let noviRed = document.createElement('tr');

                    let prvaKolona = document.createElement('td');
                    prvaKolona.textContent = item.item;
                    noviRed.appendChild(prvaKolona);

                    let drugaKolona = document.createElement('td');
                    drugaKolona.textContent = item.price;
                    noviRed.appendChild(drugaKolona);

                    tabela.appendChild(noviRed);

                    totalPrice += item.price;
                }
            });
            let poslednjiRed = document.createElement('tr');

            let prvaKolona = document.createElement('td');
            prvaKolona.textContent = "Ukupno:";
            poslednjiRed.appendChild(prvaKolona);

            let drugaKolona = document.createElement('td');
            drugaKolona.textContent = `${totalPrice}`;
            poslednjiRed.appendChild(drugaKolona);

            poslednjiRed.style.fontWeight = "bold";
            tabela.appendChild(poslednjiRed);

            divTabela.appendChild(tabela);
            // let pMessage = document.createElement('p');
            // pMessage.style.fontWeight = "bold";
            // pMessage.style.fontSize = "24px";
            // pMessage.textContent = `Total order price: ${totalPrice}RSD`;
            // divOrder.appendChild(pMessage);
            }
        }).catch((error) => {
            console.log(error);
        });
}

// formOrder.addEventListener('submit', click2);

async function clickGetItems() {
    let data1 = await getItemsReturnPromise("./JSON/stock.json");
    let capacity = inputOrder.value;
    let itemsNoStock = [];
    data1.forEach(item => {
        if (item.stock == 0) {
            itemsNoStock.push(item.id);
        }
    });

    let data2 = await getItemsReturnPromise("./JSON/weights.json");
    let totalWeight = 0;
    data2.forEach(item => {
        // Da li niz itemsNoStock sadrzi item.id
        if (itemsNoStock.includes(item.id)) {
            // Potrebna je tezina artikla
            totalWeight += item.weight;
        }
    });
    // console.log(totalWeight);
    if (totalWeight > capacity) {
        let pMessage = document.createElement('p');
        pMessage.style.fontWeight = "bold";
        pMessage.style.fontSize = "24px";
        pMessage.textContent = "Not enough capacity in truck!";
        divOrder.appendChild(pMessage);
    }
    else {
        let data3 = await getItemsReturnPromise("./JSON/prices.json");
        let totalPrice = 0;
        let tabela = document.createElement('table');
        data3.forEach(item => {
            if (itemsNoStock.includes(item.id)) {
                let noviRed = document.createElement('tr');

                let prvaKolona = document.createElement('td');
                prvaKolona.textContent = item.item;
                noviRed.appendChild(prvaKolona);

                let drugaKolona = document.createElement('td');
                drugaKolona.textContent = item.price;
                noviRed.appendChild(drugaKolona);

                tabela.appendChild(noviRed);
                totalPrice += item.price;
            }
        });
        let poslednjiRed = document.createElement('tr');

        let prvaKolona = document.createElement('td');
        prvaKolona.textContent = "Ukupno:";
        poslednjiRed.appendChild(prvaKolona);

        let drugaKolona = document.createElement('td');
        drugaKolona.textContent = `${totalPrice}`;
        poslednjiRed.appendChild(drugaKolona);

        poslednjiRed.style.fontWeight = "bold";
        tabela.appendChild(poslednjiRed);

        return tabela; 
    }
}

let click3 = event => {
    event.preventDefault();
    clickGetItems()
    .then(tabela => {
        divTabela.appendChild(tabela);
    })
    .catch(err => {
        console.log(err);
    });
}

formOrder.addEventListener('submit', click3);
