async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/postsssssssssssss"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Fetch error:", error.message);
    }
  }
  
  fetchData();
  