type BookId = string;
interface Book 
{ 
    readonly id: BookId; 
    title: string;
    isbn: string;
    author: string;
}
interface Loan
{
    id: string;
    bookId: string;
    memberId: string; 
}
function addBook(list: Book[], book: Book): Book[]
{
    return [...list, book];
  
}
function findByIsbn(list: Book[], isbn: string): Book | undefined
{
    let book: Book | undefined = list.find(el => el.isbn === isbn);
    return book?book:undefined;
}
const books: Book[] = [];

const b1: Book = {
  id: "b1",
  title: "Clean Code1",
  isbn: "1231",
  author: "Martin"
};
const b2: Book = {
  id: "b2",
  title: "Clean Code2",
  isbn: "1232",
  author: "Martin2"
};
const b3: Book = {
  id: "b3",
  title: "Clean Code3",
  isbn: "1233",
  author: "Martin3"
};

const newList = addBook(books, b1);//return a **new** array with the book added
const newList2 = addBook(newList, b2);//return a **new** array with the book added
const newList3 = addBook(newList2, b3);//return a **new** array with the book added

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