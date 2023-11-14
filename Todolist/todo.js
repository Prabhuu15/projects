let inputbox = document.getElementById("inputbox");
let liststask = document.getElementById("listsss");

function addtask() {
  if (inputbox.value === "") {
    alert("Write Something");
  } else {
    let Li = document.createElement("li");
    Li.innerHTML = inputbox.value;
    let button = document.createElement("button"); // Created button
    button.textContent = "Delete";
    button.addEventListener("click", function () {
      Li.remove();
      
    });
    Li.appendChild(button);
    liststask.appendChild(Li);
  }
  inputbox.value = "";
}
