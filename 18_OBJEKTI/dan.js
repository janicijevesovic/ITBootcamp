let dan = {
    datum: "2021/05/17",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [10, 15, 17, 21, 18, 13, 11],
    // 1. Metoda: Odredjuje prosecnu temperaturu izmerenu tog dana
    prosecna: function() {
        let sum = 0;
        this.temperature.forEach(temp => {
            sum += temp;
        });
        return sum / this.temperature.length;
    },
    // 2. Metoda: Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom
    natprosecna: function() {
        let avg = this.prosecna();
        let br = 0;
        this.temperature.forEach(temp => {
            if (temp > avg) {
                br += 1;
            }
        });
        return br;
    },
    // 3. Metoda: Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maxMerenja: function() {
        let maxTemp = this.temperature[0];
        this.temperature.forEach(temp => {
            if (temp > maxTemp) {
                maxTemp = temp;
            }
        });
        let brMax = 0;
        this.temperature.forEach(temp => {
            if (temp == maxTemp) {
                brMax += 1;
            }
        });
        return brMax;
    },
    // 4. Metoda: Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    izmedjuTemperatura: function(temp1, temp2) {
        // Ukoliko je temp1 > temp2 treba da zamene mesta
        if (temp1 > temp2) {
            let tmp = temp1;
            temp1 = temp2;
            temp2 = tmp;
        }
        let brIzmedju = 0;
        this.temperature.forEach(temp => {
            if (temp > temp1 && temp < temp2) {
                brIzmedju += 1;
            }
        });
        return brIzmedju;
    },
    // 5. Metoda: Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.
    vecinaIznadProseka: function() {
        let brIznadProseka = this.natprosecna;
        return brIznadProseka > this.temperature.length / 2;
    },
    // 6. Metoda: Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    leden: function() {
        for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] > 0) {
                return false;
            }
        }
        return true;
    },
    // 7. Metoda: Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
    tropski: function() {
        for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] < 24) {
                return false;
            }
        }
        return true;
    },
    // 8. Metoda: Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
    nepovoljan: function() {
        for (let i = 0; i < this.temperature.length - 1; i++) {
            if (Math.abs(this.temperature[i] - this.temperature[i + 1]) > 8) {
                return true;
            }
        }
        return false;
    },
    // 9. Metoda: Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    neuobicajen: function() {
        let tempIspodMinus5 = false;
        let tempIznadPlus25 = false;
        this.temperature.forEach(temp => {
            if (temp < -5) {
                tempIspodMinus5 = true;
            }
            else if (temp > 25) {
                tempIznadPlus25 = true;
            }
        });
        let prviUslov = this.kisa && tempIspodMinus5;
        let drugiUslov = this.oblacno && tempIznadPlus25;
        let treciUslov = this.kisa && this.oblacno && this.sunce;
        return prviUslov || drugiUslov || treciUslov; 
    }
};

// 1. Metoda: Odredjuje prosecnu temperaturu izmerenu tog dana
console.log(dan.prosecna());

// 2. Metoda: Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom
console.log(dan.natprosecna());

// 3. Metoda: Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
console.log(dan.maxMerenja());

// 4. Metoda: Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
console.log(dan.izmedjuTemperatura(10, 18));
console.log(dan.izmedjuTemperatura(18, 10));

// 5. Metoda: Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.
console.log(dan.vecinaIznadProseka());

// 6. Metoda: Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
console.log(dan.leden());

// 7. Metoda: Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
console.log(dan.tropski());

// 8. Metoda: Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
console.log(dan.nepovoljan());

// 9. Metoda: Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
console.log(dan.neuobicajen());


