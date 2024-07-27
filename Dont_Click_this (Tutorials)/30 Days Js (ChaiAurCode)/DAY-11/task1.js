//create a promies that resolves

const resolvePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise Resolved after 2 seconds");
    }, 2000);
});

resolvePromise.then((message) =>{
    console.log(message);
})

