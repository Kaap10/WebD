for(let row = 0; row < 5; row++) {
    let pattern = "";
    for(let col = 0; col < row+1; col++) {
        pattern = pattern + "* ";
    }
    console.log(pattern.trim());
}