class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = database.collection('chats');
    }

    // Seteri
    set room(room) {
        this._room = room;
    }
    set username(username) {
        this._username = username;
    }

    // Geteri
    get room() {
        return this._room;
    }
    get username() {
        return this._username;
    }

    // Metode
    async addChat(msg) {
        let date = new Date();
        let timestamp = firebase.firestore.Timestamp.fromDate(date);
        let newMessage = {
            message: msg,
            username: this.username,
            room: this.room,
            created_at: timestamp
        }
        let response = await this.chats.doc().set(newMessage);
        return response;
    }

    getChats(callback) {
        this.chats.onSnapshot(snapshot => {
            // console.log(snapshot.docChanges());
            // Krecemo se nizom promena i trazimo one promene koje su izazvale dodavanje dokumenta (added)
            snapshot.docChanges().forEach(change => {
                if (change.type == "added") {
                    // console.log("Promena u bazi");
                    // console.log(change.doc.data()); // Ispsis dokumenata koji su dodati u bazu
                    callback(change.doc.data());
                }
            });
        });
    }
}

let chat1 = new Chatroom("js", "user1");


// Poziv asinhrone metode addChat
// console.log(chat1.addChat("Test poruka"));
// chat1.addChat("Test poruka dodavanje :)))")
//     .then(() => 
//         console.log("Cet je dodat")
//     )
//     .catch(err => 
//         console.log("Greska:", err)
//     );

// let chat2 = new Chatroom("general", "user2");
// chat2.addChat("Zdravo svima!")
//     .then(() => 
//         console.log("Cet je dodat")
//     )
//     .catch(err => 
//         console.log("Greska:", err)
//     );

// Poziv Callback Funkcije getChats
chat1.getChats(data => {
    console.log(data);
});