function outerCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        },
    };
}

const counter = outerCounter();
console.log(counter);
counter.increment();
counter.increment();
console.log(counter.getCount());

