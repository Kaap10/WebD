function revString(str) {
    const stack = new Stack();
    for(let char of str) {
        stack.push(char);
    }

    let reversed = "";
    while(stack.peek()!==null) {
        reversed += stack.pop();
    }
    return reversed;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world"));