export class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = database.collection('chats');
        this.unsub;
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
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at', 'asc')
            .onSnapshot(snapshot => {
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

    updateUsername(username) {
        this.username = username;
    }

    updateRoom(room) {
        this.room = room;
        if (this.unsub) {
            this.unsub();
        }
        
    }
}
