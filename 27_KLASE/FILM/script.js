import {Film} from "./film.js";

let film1 = new Film("Kum", "F.Kopola", 1972, [7.5, 7, 9, 7.5, 10]);
let film2 = new Film("Sindlerova lista", "S.Spilberg", 2000, [8, 6, 8, 7.5, 6]);
let film3 = new Film("Dobar, los, zao", "S.Leone", 1900, [8, 8, 7.5, 6.5, 8.5, 6.5]);

let arrFilm = [film1, film2, film3];

let vekFilmova = (nizFilmova, vek) => {
    nizFilmova.forEach(film => {
        if (100 * (vek - 1) < film.godinaIzdanja && vek * 100 >= film.godinaIzdanja) {
            console.log(film)
        }
    });
}

let prosecnaOcena = nizFilmova => {
    let ukupneOcene = 0;
    let brojOcena = 0;
    nizFilmova.forEach(film => {
        film.ocene.forEach(ocena => {
            ukupneOcene += ocena;
            brojOcena += 1;
        });
    });
    return ukupneOcene / brojOcena;
}

let najboljeOcenjeni = nizFilmova => {
    let najbolji = nizFilmova[0]; // Cuva objekat - najbolji film
    nizFilmova.forEach(film => {
        if (film.prosek() > najbolji.prosek()) {
            najbolji = film;
        }
    });
    return najbolji;
}

let osrednjiFilm = nizFilmova => {
    let prosekSvihFilmova = prosecnaOcena(nizFilmova);
    let najblizi = nizFilmova[0];
    let najmanjaRazlika = Math.abs(najblizi.prosek() - prosekSvihFilmova);
    nizFilmova.forEach(film => {
        if (Math.abs(film.prosek() - prosekSvihFilmova) < najmanjaRazlika) {
            najmanjaRazlika = Math.abs(film.prosek() - prosekSvihFilmova);
            najblizi = film;
        }
    });
    return najblizi;
}

let najmanjaOcenaNajboljeg = nizFilmova => {
    let najboljiFilm = najboljeOcenjeni(nizFilmova);
    let najslabijaOcena = najboljiFilm.ocene[0];
    najboljiFilm.ocene.forEach(ocena => {
        if (ocena < najslabijaOcena) {
            najslabijaOcena = ocena;
        }
    });
    console.log(najslabijaOcena);
}

let najmanjaOcena = nizFilmova => {
    let minimalnaOcena = nizFilmova[0].ocene[0];
    nizFilmova.forEach(film => {
        film.ocene.forEach(ocena => {
            if (ocena < minimalnaOcena) {
                minimalnaOcena = ocena;
            }
        }); 
    });
    return minimalnaOcena;
}

let najcescaOcena = (nizFilmova, nizOcena) => {
    let najcescaOcena = nizOcena[0];
    let najveciBrojOcena = 0;
    nizFilmova.forEach(film => {
        film.ocene.forEach(ocena => {
            if (ocena == najcescaOcena) {
                najveciBrojOcena +=1 ;
            }
        });
    });

}

let iznadOcene = (ocena, nizFilmova) => {
    let nizBoljih = [];
    nizFilmova.forEach(film => {
        if (film.prosek() > ocena) {
            nizBoljih.push(film);
        }
    });
    return nizBoljih;
}




