let functions = [];

for (let i = 0; i < 5; i++) {
  functions.push(
    (function (index) {
      return function () {
        console.log(index);
      };
    })(i)
  );
}

functions.forEach((func) => func());
/*
0
1
2
3
4
*/