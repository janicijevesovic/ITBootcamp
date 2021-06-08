class Film {
    constructor(naslov, reziser, godinaIzdanja) {
        this.naslov = naslov;
        this.reziser = reziser;
        this.godinaIzdanja = godinaIzdanja;
    }

    // Seteri
    set naslov(naslov) {
        this._naslov = naslov;
    }
    set reziser(reziser) {
        this._reziser = reziser;
    }
    set godinaIzdanja(godinaIzdanja) {
        if (godinaIzdanja > 1800) {
            this._godinaIzdanja = godinaIzdanja;
        }
        else {
            this._godinaIzdanja = 1800;
        }
        
    }

    // Geteri
    get naslov() {
        return this._naslov;
    }
    get reziser() {
        return this._reziser;
    }
    get godinaIzdanja() {
        return this._godinaIzdanja;
    }

    // Metode
    stampaj() {
        console.log(this.naslov, this.reziser, this.godinaIzdanja);
    }
}

let film1 = new Film("Kum", "F.Kopola", 1972);
let film2 = new Film("Sindlerova lista", "S.Spilberg", 1993);
let film3 = new Film("Dobar, los, zao", "S.Leone", 1966);

film2.godinaIzdanja = 2002;
film2.stampaj();
film3.godinaIzdanja = 1600;
film3.stampaj();


