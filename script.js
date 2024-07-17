let userInput = document.getElementById("userInput");
let addBtn = document.getElementById("btn");

addBtn.addEventListener("click", function (e) {
  if (userInput.value == "") {
    alert("Please enter a value");
    return;
  } else {
    let li = document.createElement("li");
    let value = userInput.value;
    li.innerHTML = value;
    document.querySelector(".list_container").appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);

    span.addEventListener("click", function (e) {
      e.target.parentElement.remove();
    });

    li.addEventListener("click", function (e) {
      e.target.classList.toggle("checked");
    });

    userInput.value = "";
  }
});
