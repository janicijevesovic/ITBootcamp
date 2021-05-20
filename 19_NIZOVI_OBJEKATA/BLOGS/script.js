let blog = {
    title: "Funkcije",
    likes: 21,
    dislikes: 1,
};

let blogs = [
    {title: "Nizovi", likes: 16, dislikes: 5},
    {title: "Grananje", likes: 14, dislikes: 0}
];

console.log(blogs);

////////////////////////////////////////

let blog1 = {
    title: "Musaka od tikvica",
    likes: 20,
    dislikes: 10
};

let blog2 = {
    title: "Lazanja!",
    likes: 236,
    dislikes: 13
};

let blog3 = {
    title: "Zapecena boranija!",
    likes: 33,
    dislikes: 32
};

let blogsArr = [blog1, blog2, blog3];

//Ispis objekat iz niza objekata
blogsArr.forEach(elem => {
    console.log(elem);
});

//Ispis naslova iz niza blogova forEach petljom
console.log(blog1.title);
blogsArr.forEach(elem => {
    console.log(elem.title);
});

//Ispis naslova iz niza blogova for petljom
console.log(blogsArr[0]); // Vraca objekat na 0 poziciji u nizu
console.log(blogsArr[0].title); // Vraca naslov objekta na 0 poziciji u nizu
for (let i = 0; i < blogsArr.length; i++) {
    console.log(blogsArr[i].title);
}

//////////////////////////////////////////

// Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca ukupan broj lajkova

let sumaLajkova = nizObjekata => {
    let ukupnoLajkova = 0;
    nizObjekata.forEach(obj => {
        ukupnoLajkova += obj.likes;
    });
    return ukupnoLajkova;
}

console.log(sumaLajkova(blogsArr));

// Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca prosecan broj lajkova

let prosekLajkova = nizObjekata => {
    let ukupnoLajkova = sumaLajkova(nizObjekata);
    return ukupnoLajkova / nizObjekata.length;
}
console.log(prosekLajkova(blogsArr));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let pozitivniBlogovi = nizObjekata => {
    let lista = "<ul>";
    nizObjekata.forEach(obj => {
        if (obj.likes > obj.dislikes) {
            lista += `<li>${obj.title}</li>`;
        }
    });
    lista += "</ul>";
    document.body.innerHTML += lista;
}

pozitivniBlogovi(blogsArr);



// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let duploVisePozitivnih = nizObjekata => {
    nizObjekata.forEach(obj => {
        if (obj.likes >= obj.dislikes * 2) {
            console.log(obj.title);
        }
    });
}

duploVisePozitivnih(blogsArr);

// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let zavrsavaUzvicnikom = nizObjekata => {
    nizObjekata.forEach(obj => {
        if ((obj.title[obj.title.length - 1]) == "!") {
            console.log(obj.title);
        }
    });
}

zavrsavaUzvicnikom(blogsArr);

let rec = "Hello!";
let poslednjiKarakter2 = rec.charAt(rec.length - 1); // vraca karakter na odredjenom indeksu
console.log(poslednjiKarakter2);

let poslednjiKarakter3 = rec.endsWith("!"); // Vraca true ukoliko se string zavrasava sa !, u suprotnom vraca false
console.log(poslednjiKarakter3);
