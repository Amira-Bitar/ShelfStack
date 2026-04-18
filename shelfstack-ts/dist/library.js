"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addBook(list, book) {
    return [...list, book];
}
function findByIsbn(list, isbn) {
    let book = list.find(el => el.isbn === isbn);
    return book ? book : undefined;
}
const books = [];
const b1 = {
    id: "b1",
    title: "Clean Code1",
    isbn: "1231",
    author: "Martin"
};
const b2 = {
    id: "b2",
    title: "Clean Code2",
    isbn: "1232",
    author: "Martin2"
};
const b3 = {
    id: "b3",
    title: "Clean Code3",
    isbn: "1233",
    author: "Martin3"
};
const newList = addBook(books, b1); //return a **new** array with the book added
const newList2 = addBook(newList, b2); //return a **new** array with the book added
const newList3 = addBook(newList2, b3); //return a **new** array with the book added
const found = findByIsbn(newList, "123");
const found2 = findByIsbn(newList3, "1231");
console.log("Book 123 :");
console.log(found);
console.log("Book 1231 :");
console.log(found2);
console.log("books");
console.log(books);
console.log("newList");
console.log(newList);
console.log("newList2");
console.log(newList2);
console.log("newList3");
console.log(newList3);
//# sourceMappingURL=library.js.map