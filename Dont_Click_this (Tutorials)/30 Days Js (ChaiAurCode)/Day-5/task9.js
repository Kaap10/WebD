//high order function take -> that takes a function and a number and call the function as many times

function repeatFunction(fn, times) {
    for(let i=0; i<times; i++) {
        fn();
    }
}

repeatFunction(() => console.log("Hello!"),3);