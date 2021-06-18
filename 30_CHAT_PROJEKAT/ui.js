export class ChatUI {
    constructor(unorderedList) {
        this.unorderedList = unorderedList;
    }

    // Seteri
    set unorderedList(unorderedList) {
        this._unorderedList = unorderedList;
    }

    // Geteri
    get unorderedList() {
        return this._unorderedList;
    }

    // Metode
    templateLI(data) {
        let date = data.created_at.toDate();
        let htmlLI = 
        `
            <li>
            <span class="username">${data.username} : </span>
            <span class="message">${data.message} </span>
            <div>${this.formatDate(date)}</div>
            </li>
        `;
        this.unorderedList.innerHTML += htmlLI;
    }

    formatDate(date) {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let g = date.getFullYear();

        return `${d}.${m}.${g}`;
    }
}
