import deleteIcon from "../assets/trash-can-outline.svg"
import editIcon from "../assets/square-edit-outline.svg"

const itemElements = (function () {

  const renderItemsList = function (items) {
    const itemsUl = document.querySelector(".items-list");
    itemsUl.textContent = "";
    items.forEach((item, index) => {
      let li = document.createElement("li");
      li.classList.add("item-li");
      li.dataset.id = index
      li.append(createItemContainer(item), createIconsContainer())
      itemsUl.appendChild(li);
    });
  }

  const createItemContainer = function (item) {
    let itemDiv = document.createElement("div");
    let prioritySpan = document.createElement("span");
    let nameH2 = document.createElement("h2");
    let descH3 = document.createElement("h3");
    let dateH3 = document.createElement("h3");

    itemDiv.classList.add("item-container");
    prioritySpan.classList.add("item-priority")
    nameH2.classList.add("item-name", "todo-item");
    descH3.classList.add("item-desc", "todo-item");
    dateH3.classList.add("item-date", "todo-item");

    nameH2.textContent = item.name
    descH3.textContent = item.desc;
    dateH3.textContent = item.dueDate;

    if (item.priority === "high") {
      prioritySpan.style.backgroundColor = "rgb(255, 0, 0)"
    } else if (item.priority === "med") {
      prioritySpan.style.backgroundColor = "rgb(255, 153, 0)"
    } else if (item.priority === "low") {
      prioritySpan.style.backgroundColor = "rgb(81, 255, 0)"
    }

    nameH2.appendChild(prioritySpan);
    itemDiv.append(nameH2, descH3, dateH3)

    return itemDiv;
  }

  const createIconsContainer = function () {
    const div = document.createElement("div");
    const deleteButton = document.createElement("img");
    const editButton = document.createElement("img");


    deleteButton.classList.add("delete-item");
    deleteButton.src = deleteIcon;

    editButton.classList.add("edit-item");
    editButton.src = editIcon;

    div.append(deleteButton, editButton)

    return div;
  }

  const selectCurrentItem = function(e) {
    const itemLi = e.target.closest(".item-li");
    const itemId = itemLi.dataset.id;
    document.querySelector("#edit-item-id").value = itemId;
  }



  return { renderItemsList, selectCurrentItem }
})()

export { itemElements }