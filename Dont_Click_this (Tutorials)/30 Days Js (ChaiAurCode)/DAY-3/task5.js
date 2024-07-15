let marks = 91;
let scoreCategory;

if(marks >= 90) {
    scoreCategory = 'A';
} else if(marks >= 80) {
    scoreCategory = 'B';
} else if(marks >= 70) {
    scoreCategory = 'C';
} else if(marks >= 60) {
    scoreCategory = 'D';
}
else {
    scoreCategory = 'E';
}

switch(scoreCategory) {
    case 'A':
        console.log("Grade: A");
        break;

    case 'B':
        console.log("Grade: B");
        break;

    case 'C':
        console.log("grade: C");
        break;

    case 'D':
        console.log("Grade: D");
        break;

    case 'E':
        console.log("Grade: E");
        break;
}