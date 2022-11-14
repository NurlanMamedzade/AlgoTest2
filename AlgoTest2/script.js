class Message {
    constructor(authorName, sendTime, text, messages = []) {
        this.authorName = authorName;
        this.sendTime = sendTime;
        this.text = text;
        this.messages = messages
    }

    toString() {
        return `${this.gettime} ${this.authorName}:${this.text}`
    }
    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
}


class Messenger extends Message {
    constructor(authorName, sendTime, text, messages) {
        super(authorName, sendTime, text, messages);

    }
    show_history() {
        this.messages.forEach(item => {
            console.log(item[0])
        })
    }
    send(authorName, text) {
        this.authorName = authorName
        this.text = text
        this.messages.push([`${this.gettime()} ${this.authorName}: ${this.text}`])
    }

}


let messenger = new Messenger()

messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.send('Nurlan', 'Sonuncu mesaj')

messenger.show_history()