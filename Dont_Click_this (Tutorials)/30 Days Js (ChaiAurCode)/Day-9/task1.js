document.getElementById("task1").textContent = "New Text Content";
document.querySelector(".task2").style.backgroundColor = "blue";

// task-3
const newDiv = document.createElement("div");
newDiv.textContent = "This is new Dev, and is appended here";
document.body.appendChild(newDiv);

const newLi = document.createElement("li");
newLi.textContent = "new List added here";
document.querySelector("ul").appendChild(newLi);

const elementToRemove = document.getElementById("task5");
if (elementToRemove) {
    elementToRemove.remove();
}  

const parentElement = document.getElementById("task5");
if(parentElement && parentElement.lastChild) {
    parentElement.removeChild(parentElement.lastChild);
}

document.querySelector("img").setAttribute("src", "you noob");

const element = document.getElementById("task8");
element.classList.add("newClass");
element.classList.remove("noob");

document.getElementById("task9Button").addEventListener("click", function () {
    document.getElementById("task9Text").textContent = "Text has been changed!";
  });

document.getElementById("task10").addEventListener("mouseover", function () {
    this.style.borderColor = "red";
  });