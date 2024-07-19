const Library = {
    name: "GL Bajaj Central Library",
    books: [
        {title: "Chusta", author: "Cutie", year: 1999},
        {title: "Whore", author: "puxxy", year: 9191}
    ]
};

console.log(Library);
console.log(Library.name);

Library.books.forEach(book => {
    console.log(book.title);
})