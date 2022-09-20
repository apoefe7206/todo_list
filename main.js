const form = document.getElementById("form");
const input = document.querySelector("#input");
const toDoListContainer = document.querySelector("#todoListContainer");
var deleteIcon = [];
var itemCount = 0;
const span = document.createElement("span");
let list = [];
function checkedItem(item) {
  if ((item.target.tagName = "li")) {
    item.target.classList.toggle("checked");
  }
}
toDoListContainer.addEventListener("click", checkedItem);

toDoListContainer.innerHTML = "";

function del(element) {
  var removalItem = list.findIndex((x) => x.id == element.parentElement.id);
  if (removalItem > -1) {
    list.splice(removalItem, 1);
    element.parentElement.remove();
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (input.value) {
    addTodo(itemCount, input.value);
    input.value = "";
    itemCount++;
  }

  toDoListContainer.innerHTML = "";
  list.forEach((todo) => {
    toDoListContainer.insertAdjacentHTML(
      "beforeend",
      `<li class="list-group-item" id="${todo.id}"> ${todo.value}
  <span onclick="del(this)" class="delete-icon">
     x
  </span>
  </li>`
    );
  });
});

function addTodo(id, value) {
  const todo = { id: id, value: value };
  list.push(todo);
}
