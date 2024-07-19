const book = {
    name: "chai aur code",
    author: "HC",
    year: 2024
};

for (let key in book) {
    if(book.hasOwnProperty(key)){
        console.log(`${key}: ${book[key]}`);
    }
};