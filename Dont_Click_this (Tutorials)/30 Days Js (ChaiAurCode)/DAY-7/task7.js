const book = {
    name: "chai aur code",
    author: "HC",
    year: 2024
};

book.getTitleAndYear = function() {
    return `${this.name} (${this.year})`;
};

console.log(book.getTitleAndYear());