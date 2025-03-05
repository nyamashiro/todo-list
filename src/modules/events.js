import { createNewItem, createNewProject, defaultList} from "./classes";
import { itemElements } from "./todo-items";

const eventHandlers = (function () {

  const openItemForm = (function () {
    const dialog = document.querySelector(".item-dialog");
    const form = document.querySelector(".item-form")

    document.body.addEventListener("click", (e) => {
      if (e.target.classList.contains("new-item")) {
        form.dataset.mode = "new-item"
        form.reset();
        dialog.showModal();
      }
    })
  })()

  const openProjectForm = (function () {
    const dialog = document.querySelector(".project-dialog");

    document.body.addEventListener("click", (e) => {
      if (e.target.classList.contains("new-project")) {
        dialog.showModal();
      }
    })
  })()

  const openEditForm = (function () {
    const itemUl = document.querySelector(".items-list");
    const form = document.querySelector(".item-form")
    itemUl.addEventListener("click", ((e) => {
      if (e.target.classList.contains("edit-item")) {
        itemElements.selectCurrentItem(e)
        const dialog = document.querySelector(".item-dialog");
        form.dataset.mode = "edit-item"
        dialog.showModal();
        fillEditFormFields(e);
      }
    }))
  })()

  const fillEditFormFields = function (e) {
    const itemLi = e.target.closest(".item-li");
    const todoItems = itemLi.querySelectorAll(".todo-item");
    const priority = itemLi.querySelector(".item-priority");
    let titleField = document.querySelector("#title")
    let descField = document.querySelector("#desc")
    let dateField = document.querySelector("#due-date")
    let priorityField = document.querySelector("#priority")
    const itemLiArray = Array.from(todoItems).map(item => item.textContent)

    if (priority.style.backgroundColor === "rgb(255, 0, 0)") {
      priorityField.value = "high"
    } else if (priority.style.backgroundColor === "rgb(255, 153, 0)") {
      priorityField.value = "med"
    } else if (priority.style.backgroundColor === "rgb(81, 255, 0)") {
      priorityField.value = "low"
    }
    titleField.value = itemLiArray[0];
    descField.value = itemLiArray[1];
    dateField.value = itemLiArray[2];
  }

  const closeForm = (function () {

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("close-form")) {
        const dialog = e.target.closest(".dialog");
        dialog.close();
      }
    })
  })()

  const captureItemDataIntoArray = function () {
    let inputs = document.querySelectorAll(".item-input");
    let priority = document.querySelector("select").value;

    let formData = Array.from(inputs).map(input => input.value);
    return [...formData, priority]
  }

  const captureProjectValue = function () {
    let project = document.querySelector(".project").value;
    return project
  }

  const submitItemForm = function (callback) {

    const submit = document.querySelector(".submit-item");
    const form = document.querySelector(".item-form");

    submit.addEventListener("click", () => {
      if (form.dataset.mode === "new-item") {
        const projectItemId = document.querySelector("#project-item-id").value;
        let newItem = createNewItem(...captureItemDataIntoArray())
        callback(newItem, projectItemId)
        form.reset();
        document.querySelector(".item-dialog").close();
      }
    })
  }

  const submitEditForm = function (callback) {
    const submit = document.querySelector(".submit-item");
    const form = document.querySelector(".item-form")

    submit.addEventListener("click", () => {
      if (form.dataset.mode === "edit-item") {
        const projectItemId = document.querySelector("#project-item-id").value;
        let itemId = document.querySelector("#edit-item-id").value
        callback(itemId, captureItemDataIntoArray(), projectItemId)
        form.reset();
        document.querySelector(".item-dialog").close();
      }
    })
  }

  const submitProjectForm = function (callback) {

    const submit = document.querySelector(".submit-project");
    const form = document.querySelector(".project-form")

    submit.addEventListener("click", () => {
      let newProject = createNewProject(captureProjectValue())
      callback(newProject)
      document.querySelector("#project-item-id").value = defaultList.projects.length - 1;
      form.reset();
      document.querySelector(".project-dialog").close();
    })
  }

  const deleteProject = function (callback) {
    const projectUl = document.querySelector(".project-list");
    projectUl.addEventListener("click", ((e) => {
      if (e.target.classList.contains("delete-project")) {
        const project = e.target.closest(".project-li");
        const projectId = project.dataset.id
        callback(projectId)
      }
    }))
  }

  const deleteItem = function (callback) {
    const itemUl = document.querySelector(".items-list");
    itemUl.addEventListener("click", ((e) => {
      if (e.target.classList.contains("delete-item")) {
        const projectItemId = document.querySelector("#project-item-id").value;
        const item = e.target.closest(".item-li");
        const itemId = item.dataset.id
        console.log(itemId)
        callback(itemId, projectItemId)
      }
    }))
  }

  return { submitItemForm, submitProjectForm, submitEditForm, deleteProject, deleteItem }
})()

export default eventHandlers;