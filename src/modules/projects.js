import { defaultList } from "./classes.js";
import { itemElements } from "./todo-items.js";
import { localStorageFunctions } from "./storage.js";

const projectListElements = (function () {

  const renderProjectsList = function (projects) {
    const projectUl = document.querySelector(".project-list");
    projectUl.textContent = "";
    projects.forEach((project, index) => {
      if (project.name === "Default Project" && index === 0) {
        let li = document.createElement("li");
        li.classList.add("project-li");
        li.dataset.id = index
        li.textContent = project.name;
        projectUl.appendChild(li);
      } else {
        let li = document.createElement("li");
        let deleteButton = createProjectDeleteButton();
        li.classList.add("project-li");
        li.dataset.id = index
        li.textContent = project.name;
        li.appendChild(deleteButton)
        projectUl.appendChild(li);
      }
    });
  }

  const createProjectDeleteButton = function () {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-project");
    deleteButton.textContent = "X"
    return deleteButton
  }

  const displaySelectedProject = (function (callback) {
    const projectUl = document.querySelector(".project-list");

    projectUl.addEventListener("click", (e) => {
      if (e.target.classList.contains("project-li")) {
        let currentList = localStorageFunctions.loadFromStorage();
        const projectId = e.target.closest(".project-li").dataset.id;
        document.querySelector("#project-item-id").value = projectId;
        itemElements.renderItemsList(currentList.projects[projectId].items)
      }
    })
  })()

  return { renderProjectsList }
})()





export { projectListElements }