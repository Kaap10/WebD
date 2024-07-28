fetch("https://jsonplaceholder.typicode.com/postsssssssssssss")
  .then((response) => response.json())
  .catch((error) => console.log("Fetch error:", error.message));
