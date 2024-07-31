document.body.innerHTML = '<button id="myButton">Click me</button>';

function attachClickListener() {
  let clickCount = 0;

  document.getElementById("myButton").addEventListener("click", function () {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
  });
}

attachClickListener();