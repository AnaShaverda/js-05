const myDiv = document.getElementById("myDiv");

//event listener

const changeColor = (event) => {
  event.target.style.color = "red";
  event.target.textContent = "clicked";
  event.target.style.backgroundColor = "yellow";
};

myDiv.addEventListener("click", changeColor);

myDiv.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "blue";
  event.target.style.color = "white";
  event.target.textContent = "hovered";
});

myDiv.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.style.color = "white";

  event.target.textContent = "click me";
});

const myBtn = document.getElementById("myBtn");
const img = document.getElementById("imgContainer");

const hideImage = (event) => {
  if (img.style.visibility === "hidden") {
    img.style.visibility = "visible";
    event.target.textContent = "hide";
  } else {
    img.style.visibility = "hidden";
    event.target.textContent = "show";
  }
};

myBtn.addEventListener("click", hideImage);

const myUl = document.getElementById("ul");
const form = document.getElementById("form");
const task = form.querySelector('input[name="task"]');
form.addEventListener("submit", (event) => {
  const error = document.getElementById("error");

  event.preventDefault();
  if (task.value.trim()) {
    const li = document.createElement("li");
    li.textContent = task.value;
    myUl.appendChild(li);
    console.log(task.value);
    task.value = "";
    error.textContent = "";
  } else {
    error.textContent = "error";
    error.classList.add("error");
  }
});

//classlist

const myNewDiv = document.getElementById("myNewDiv");
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", (event) => {
  event.target.classList.add("red");
  myNewDiv.classList.add("blue");
  myNewDiv.classList.remove("blue");
});

//toggle

colorBtn.addEventListener("mouseover", (event) => {
  event.target.classList.toggle("hover");
});

colorBtn.addEventListener("mouseout", (event) => {
  event.target.classList.toggle("hover");
});

//replace

//contains
myNewDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("enabled")) {
    event.target.classList.replace("enabled", "disabled");
  } else {
    event.target.classList.replace("disabled", "enabled");
  }
});

// function myFunc() {
//   console.log("hello");
// }

const element = document.getElementById("test");

// element.addEventListener("click", myFunc);

element.onclick = function () {
  console.log("hello0");
};
