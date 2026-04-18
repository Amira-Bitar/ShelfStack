class LibraryItem {
    constructor(id, title, isAvailable) {
        this.id = id;
        this.title = title;
        this.isAvailable = isAvailable;
    }
    describe() {
        return `Book - ID: ${this.id}, Title: ${this.title}, Available: ${this.isAvailable}`;
    }
    borrow() {
        this.isAvailable = false;
    }
    returnItem() {
        this.isAvailable = true;
    }
}


class Book extends LibraryItem {

    constructor({id, title, isAvailable, isbn, author}) {
        super(id, title, isAvailable);
        this.isbn =isbn;
        this.author = author;
    }
    describe() {
        return `Book - ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Available: ${this.isAvailable}`;
    }
}


class Member {
    #balance;
    static memberCount=0;
    constructor() 
    {
        this.memberId=`m-${Member.memberCount}`;
        this.#balance = 0;
        Member.memberCount++;
    }
    deposit(n) {
        this.#balance += n;
    }
    getBalance() {
        return this.#balance;
    }
}


class LibraryCatalog {
    constructor() {
        this.items = []; 
    }
    addItem(book) {
        this.items.push(book);
    }

    static #id = 0;

    
    static makeId(prefix) {
        return `${prefix}-${++this.#id}`;
    }

    registerLoan({ memberId, itemId }) {
        const item = this.items.find(i => i.id === itemId);

        if (item && item.isAvailable) 
        {
            item.borrow();
            return `Member ${memberId} borrowed item ${itemId}`;
        } 
        else
            return `Book not available`;
        
    }
    snapshotStats() 
    {
        const total = this.items.length;
        const available = this.items.filter(i => i.isAvailable).length;
        return { total, available };
    }


}

let catalog = new LibraryCatalog();
catalog.addItem(
  new Book({ id:LibraryCatalog.makeId("b"),title:"Clean Code1", isAvailable:true,isbn:"978-0132350881",author:"Martin1" })
);

catalog.addItem(
  new Book({ id:LibraryCatalog.makeId("b"),title: "Clean Code2",isAvailable:true,isbn:"978-0132350882",author:"Martin2" })
);
catalog.addItem(
  new Book({  id:LibraryCatalog.makeId("b"),title: "Clean Code3",isAvailable:true,isbn:"978-0132350883",author:"Martin3" })
);
catalog.addItem(
  new Book({  id:LibraryCatalog.makeId("b"),title: "Clean Code4",isAvailable:true, isbn:"978-0132350884",author:"Martin4" })
);
console.log("catalog");
console.log(catalog);
// Member
let Member1= new Member();
let Member2= new Member();
let Member3= new Member();
let Member4= new Member();

const [m0,m1,m2,m3] = [Member1.memberId, Member2.memberId,Member3.memberId, Member4.memberId];

// console.log(m3);

// loan
catalog.registerLoan({ memberId: m0, itemId: "b-1" });

// print describe
console.log(catalog.items[0].describe());

// stats

// console.log(catalog.items.length);
// console.log(catalog.items[2]);
// console.log(catalog.items[0].isAvailable);
const { total, available } = catalog.snapshotStats();
console.log(`total: ${total}, available: ${available}`);