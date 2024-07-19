const books = {
    title: "Chusta",
    author: "Cutie",
    ChustaQuantity: 69,
    // getInfo 
    getInfo: function() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
};

console.log(books.ChustaQuantity);
console.log(books.getInfo());

