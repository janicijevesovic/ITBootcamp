export class Film {
    constructor(naslov, reziser, godinaIzdanja, ocene) {
        this.naslov = naslov;
        this.reziser = reziser;
        this.godinaIzdanja = godinaIzdanja;
        this.ocene = ocene;
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
    set ocene(ocene) {
        this._ocene = ocene;
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
    get ocene() {
        return this._ocene;
    }

    // Metode
    stampaj() {
        console.log(this.naslov, this.reziser, this.godinaIzdanja);
    }
    prosek() {
        let ukupneOcene = 0;
        this.ocene.forEach(ocena => {
            ukupneOcene += ocena;
        });
        return ukupneOcene / this.ocene.length;
    }
}
