// Dohvatanje jednog dokumenta iz kolekcije
/*
db.collection('customers').doc('customer-01')
.get()
.then(doc => {
    if (doc.exists) {
        let t = doc.data();
        console.log(t);
    }
    else {
        console.log(`No document with id: ${doc.id}`);
    }
})
.catch(err => {
    console.log(`Desila se greska: ${err}`);
});

// Dohvatanje svih dokumenata iz kolekcije
db.collection('customers')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document #${id}: ${t}`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatanje svih dokumenata iz kolekcije, samo u nekom redosledu
/*
db.collection('users').orderBy('surname', 'asc')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document #${id}`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

/*
// Dohvatanje svih dokumenata iz kolekcije, samo u nekom redosledu
// (Isto kao i malopre, samo se sortira po vise polja)
db.collection('users')
.orderBy('surname', 'asc')
.orderBy('name', 'asc')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document #${id}`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatanje ogranicenog broja dokumenata iz kolekcije
/*
db.collection('users')
.orderBy('surname', 'asc')
.orderBy('name', 'asc')
.limit(2)
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document #${id}`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatanje dokumenata iz kolekcije koji zadovoljavaju odredjene uslove (filtriranje dokumenata)
/*
// Dohvati sve korisnike mladje od 30 godina
db.collection('customers')
.where('age', '>=', 30)
// .orderBy('age', 'asc') - where i orderBy mogu da se kombinuju
// .orderBy('name', 'desc')
// .limit(2)
// - where i orderBy mogu da se kombinuju po razlicitim poljima, ali to povlaci
//  1) Da se sva polja navedena u where nalaze i u orderBy
//  2) Da postoji kompozitni index za sva polja i redoslede navedene u orderBy
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document #${id}`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve korisnike cija je adresa u Nisu
/*
db.collection('customers')
.where('addresses', 'array-contains', 'Beograd')
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document #${id}`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve korisnike koji imaju 25 ili 31 godinu
/*
db.collection('customers')
.where('age', 'in', [25, 31])
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document #${id}`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve korisnike koji se zovu Pera ili Laza
/*
db.collection('customers')
.where('name', 'in', ["Pera", "Laza"])
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document #${id}`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

// Dohvatiti sve korisnike koji zive u Nisu ili Loznici
/*
db.collection('customers')
.where('addresses', 'array-contains-any', ["Nis", "Loznica"])
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Document #${id}`);
        console.log(t);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

/*
// Zadatak 1
// Iz kolekcije customers, pročitati sve klijente sortirane po imenu.
db.collection('customers')
.orderBy('name', 'asc')
.get()
.then(documents => {
    documents.forEach(doc => {
        console.log(doc.data());
    });
})
.catch(err => {
    console.log("Error", err);
}); 
*/

/*
// Zadatak 2
// Iz kolekcije customers procitati sve klijente koji imaju adresu u Nisu
db.collection('customers')
.where('addresses', 'array-contains', 'Nis')
.get()
.then(documents => {
    documents.forEach(doc => {
        console.log(doc.data());
    });
})
.catch(err => {
    console.log("Error", err);
});
*/

/*
// Zadatak 3
// Iz kolekcije customers procitati sve klijente koji imaju platu vecu ili jednaku od 500
db.collection('customers')
.where('salary', '>=', 500)
.get()
.then(documents => {
    documents.forEach(doc => {
        console.log(doc.data());
    });
})
.catch(err => {
    console.log("Errror", err);
});
*/

/*
// Zadatak 4
// Iz kolekcije customers procitati sve klijente koji imaju platu izmedju 300 i 800
db.collection('customers')
.where('salary', '>=', 300)
.where('salary', '<=', 800)
.get()
.then(documents => {
    documents.forEach(doc => {
        console.log(doc.data());
    });
})
.catch(err => {
    console.log("Error:", err);
});
*/

/*
// Zadatak 5
// Iz kolekcije customers procitati sve klijente koji imaju platu manju od 900 i imaju 30 godina
db.collection('customers')
.where('salary', '<', 900)
.where('age', '==', 30)
.get()
.then(documents => {
    documents.forEach(doc => {
        console.log(doc.data());
    });
})
.catch(err => {
    console.log("Error:", err);
});
*/


/*
// Zadatak 6
// Iz kolekcije customers procitati sve klijente koji imaju adresu u Nisu ili Beogradu
db.collection('customers')
.where('addresses', 'array-contains-any', ["Nis", "Beograd"])
.get()
.then(documents => {
    documents.forEach(doc => {
        console.log(doc.data());
    });
})
.catch(err => {
    console.log("Error: ", err);
});
*/

/*
// Zadatak 7
// Iz kolekcije customers procitati sve klijente koji imaju 22, 25 ili 28 godina
db.collection('customers')
.where('age', 'in', [22, 25, 28])
.get()
.then(documents => {
    documents.forEach(doc => {
        console.log(doc.data());
    });
})
.catch(err => {
    console.log("Error:", err);
});
*/

/*
// Zadatak 8
// Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.
db.collection('tasks')
.orderBy('title', 'asc')
.get()
.then(documents => {
    documents.forEach(doc => {
        console.log(doc.data());
    });
})
.catch(err => {
    console.log("Error", err);
});
*/

/*
// Zadatak 9
// Iz kolekcije tasks, pročitati sve zadatke koji su prioritetni
db.collection('tasks')
.where('priority', '==', true)
.get()
.then(documents => {
    documents.forEach(doc => {
        console.log(doc.data());
    });
})
.catch(err => {
    console.log("Error", err);
});
*/

// Zadatak 10
// Iz kolekcije tasks, pročitati sve zadatke koji treba da se izvrse u tekucoj godini
let datum = new Date();
let tekucaGodina = datum.getFullYear();

let pocGod = new Date(tekucaGodina, 0, 1);
let krajGod = new Date(tekucaGodina + 1, 0, 1);

db.collection('tasks')
.where('due_date', '>', pocGod)
.where('due_date', '<', krajGod)
.get()
.then(documents => {
    documents.forEach(doc => {
        console.log(doc.data());
    });
})
.catch(err => {
    console.log("Error", err);
});

// Zadatak 11
// Iz kolekcije tasks, pročitati sve zadatke koji su zavrseni
// db.collection('tasks')
// .where('start_date', '<', datum)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         console.log(doc.data());
//     });
// })
// .catch(err => {
//     console.log("Error", err);
// });

// Zadatak 12
// Iz kolekcije tasks, pročitati sve zadatke koji tek treba da pocnu
// db.collection('tasks')
// .where('start_date', '>', datum)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         console.log(doc.data());
//     });
// })
// .catch(err => {
//     console.log("Error", err);
// });