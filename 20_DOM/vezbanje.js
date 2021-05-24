let v1 = document.querySelector("p");
console.log(v1);

let v2 = document.querySelector(".error");
console.log(v2);

let v3 = document.getElementById("poslednjiRed");
console.log(v3);

let v4 = document.getElementsByTagName("a");
console.log(v4);

let v5 = document.getElementsByTagName("img");
console.log(v5);
/////////////////////////////////////////////////////////////////////

let sviParagrafi = document.getElementsByTagName("p");
for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].innerHTML += " VAZNO!!!";
}

let divoviError = document.querySelectorAll("div.error");
divoviError.forEach(div => {
    div.innerHTML = "<h1>Greska!</h1>" + div.innerHTML;
});

for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].innerHTML += (i + 1) ** 2;
}

for (let i = 0; i < v5.length; i++) {
    v5[i].alt += " sija";
}

// for (let i = 0; i < v5.length; i++) {
//     v5[i].setAttribute('alt', 'Novi alt dodat preko JS');
// }

for (let i = 0; i < sviParagrafi.length; i++) {
    sviParagrafi[i].setAttribute('style', 'color:purple');
}

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

for (let i = 0; i < v4.length; i++) {
    v4[i].setAttribute('style', 'padding: 5px; font-size: 18px; text-decoration: none');
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

// let slikeSaPNG = document.querySelectorAll("*");
// console.log(slikeSaPNG);