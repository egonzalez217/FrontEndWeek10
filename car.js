let id = 0;

document.getElementById("add").addEventListener("click", () => {
  let table = document.getElementById("list");
  let row = table.insertRow(1);
  row.setAttribute("id", `item-${id}`);
  row.insertCell(0).innerHTML = document.getElementById("new-make").value;
  row.insertCell(1).innerHTML = document.getElementById("new-model").value;
  row.insertCell(2).innerHTML = document.getElementById("new-year").value;
  row.insertCell(3).innerHTML = document.getElementById("new-color").value;

  let actions = row.insertCell(4);
  actions.appendChild(createDeleteButton(id++));

  document.getElementById("new-make").value = "";
  document.getElementById("new-model").value = "";
  document.getElementById("new-year").value = "";
  document.getElementById("new-color").value = "";
});

function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-danger";
  btn.id = btn.innerHTML = "Delete";

  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };

  return btn;
}
