let v1 = document.querySelector("p");
console.log(v1);

let v2 = document.querySelector(".error");
console.log(v2);

let v3 = document.getElementById("poslednjiRed");
console.log(v3);
// let v3 = document.querySelector("table");
// console.log(v3.lastChild.childNodes[4]);

let v4 = document.getElementsByTagName("a");
console.log(v4);

let v5 = document.getElementsByTagName("img");
console.log(v5);
/////////////////////////////////////////////////////////////////////

//1.
let sviParagrafi = document.getElementsByTagName("p");
for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].innerHTML += " VAZNO!!!";
}

//2.
let divoviError = document.querySelectorAll("div.error");
divoviError.forEach(div => {
    div.innerHTML = "<h1>Greska!</h1>" + div.innerHTML;
});

//3.
for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].innerHTML += (i + 1) ** 2;
}

//4.
for (let i = 0; i < v5.length; i++) {
    v5[i].alt += " sija";
}

// for (let i = 0; i < v5.length; i++) {
//     v5[i].setAttribute('alt', 'Novi alt dodat preko JS');
// }


//5.
for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].setAttribute('style', 'color:purple');
}


//6.
// for (let i = 0; i < sviParagrafi.length; i++) {
//     if (i % 2 == 0) {
//         sviParagrafi[i].style.backgroundColor = "green";
//     }
//     else {
//         sviParagrafi[i].style.backgroundColor = "red";
//     }
// }

let parniParagrafi = document.querySelectorAll("p:nth-of-type(even)");
parniParagrafi.forEach(paragraf => {
    paragraf.style.backgroundColor = "green";
});

let neparniParagrafi = document.querySelectorAll("p:nth-of-type(odd)");
neparniParagrafi.forEach(paragraf => {
    paragraf.style.backgroundColor = "red";
});


//7.
for (let i = 0; i < v4.length; i++) {
    v4[i].setAttribute('style', 'padding: 5px; font-size: 18px; text-decoration: none;');
}

let parniLinkovi = document.querySelectorAll("a:nth-of-type(even)");
parniLinkovi.forEach(link => {
    link.style.backgroundColor = "green";
    link.style.color = "purple";
});

let neparniLinkovi = document.querySelectorAll("a:nth-of-type(odd)");
neparniLinkovi.forEach(link => {
    link.style.backgroundColor = "blue";
    link.style.color = "white";
});


//8.
// Prvi nacin
let slikeSaPNG = document.querySelectorAll("img[src*='.png']");
slikeSaPNG.forEach(slika => {
    slika.style.border = "2px solid red";
});

// Drugi nacin
for (let i = 0; i < v5.length; i++) {
    if (v5[i].src.includes(".png") || v5[i].src.includes(".PNG")) {
        v5[i].style.border = "5px solid purple";
    }
}

//9.
for (let i = 0; i < v4.length; i++) {
    if (v4[i].target == "_blank") {
        v4[i].setAttribute('target', '_top');
    }
    else {
        v4[i].setAttribute('target', '_blank');
    }
}

//10.
let nizImena = ["Pera", "Mika", "Laza", "Joca", "Stanko"];
nizImena.forEach(ime => {
    if (ime[0] == "S") {
        document.body.innerHTML += `<a href="#" target="_blank">${ime}</a><br>`;
    }
    else {
        document.body.innerHTML += `<a href="#" target="_self">${ime}</a><br>`;
    }
});


let listaImena = `<ul>`;
for (let i = 0; i < nizImena.length; i++) {
    if (i % 2 == 0) {
        listaImena += `<li style="color:red;">${nizImena[i]}</li>`;
    }
    else {
        listaImena += `<li style="color:blue;">${nizImena[i]}</li>`;
    }
}
listaImena += `</ul>`;
document.body.innerHTML += listaImena;

let tabelaImena = `<table>`;
nizImena.forEach(ime => {
    tabelaImena += `<tr><td style="border: 2px solid red; margin: 5px; padding: 15px;">${ime}</td></tr>`;
});
tabelaImena += `</table>`;
document.body.innerHTML += tabelaImena;
