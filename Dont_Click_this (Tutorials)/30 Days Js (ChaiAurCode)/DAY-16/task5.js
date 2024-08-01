function revString(str) {
    if(str=== ""){
        return "";
    }

    let result = revString(str.slice(1)) + str[0];
    return result;
}

console.log(revString("hello")); // olleh