document.querySelectorAll(".pen").forEach(function(item){
  item.onclick = function (){
    document.querySelector("#demo").style.color = item.dataset.gg;
  }
});

// Select elements
const form = document.querySelector("form");
const taskInput = document.querySelector("input[type='text']");
const taskList = document.createElement("ul");
taskList.className = "list-group mt-3";

// Add the list below the form
form.after(taskList);

// Add new task
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create task item
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm";
  deleteBtn.textContent = "Delete";

  // Delete task
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
