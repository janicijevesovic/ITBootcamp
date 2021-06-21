import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// let chat1 = new Chatroom("general", "user1");


// Poziv asinhrone metode addChat
// console.log(chat1.addChat("Test poruka"));
// chat1.addChat("Dodata nova poruka u general")
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
// chat1.getChats(data => {
//     console.log(data);
// });

let chatroom2 = new Chatroom("tests", "Milica");
// chatroom2.addChat("Pozdrav svima")
//     .then(() => 
//         console.log("Cet je dodat")
//     )
//     .catch(err => 
//         console.log("Greska:", err)
//     );


chatroom2.getChats(data => {
    console.log(data);
});

chatroom2.room = "js";

chatroom2.getChats(data => {
    console.log(data);
});


////////////////////////////////////////
// Testiranje ChatUI klase

let ulChatList = document.querySelector('#msgUL');
let chatUI1 = new ChatUI(ulChatList);

console.log(chatUI1.unorderedList);

chatroom2.getChats(data => {
    chatUI1.templateLI(data);
});

let inputSend = document.getElementById("inputSend")
let btnSend = document.getElementById("btnSend");
btnSend.addEventListener('click', () => {
    if (inputSend.value == "") {
        alert("Ne moze se poslati prazna poruka");
    }
    else {
        chatroom2.addChat(inputSend.value)
        .then(() => inputSend.value = "")
        .catch(error => console.log(error));
    }   
});