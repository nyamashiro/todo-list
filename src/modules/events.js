import { createNewItem, createNewProject } from "./to-do-items";

const eventHandlers = (function () {

  const openItemForm = (function () {
    const form = document.querySelector(".new-item");
    const dialog = document.querySelector(".item-dialog");


    form.addEventListener("click", () => {
      dialog.showModal();
    })
  })()

  const openProjectForm = (function () {
    const form = document.querySelector(".new-project");
    const dialog = document.querySelector(".project-dialog");

    form.addEventListener("click", () => {
      dialog.showModal();
    })
  })()

  const closeForm = (function () {

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("close-form")) {
        const dialog = e.target.closest(".dialog");
        dialog.close();
      }
    })
  })()

  const captureItemDataIntoArray = function () {
    let inputs = document.querySelectorAll(".item");
    let priority = document.querySelector("select").value;

    let formData = Array.from(inputs).map(input => input.value);
    return [...formData, priority]
  }

  const captureProject = function () {
    let project = document.querySelector(".project").value;
    return project
  }

  const submitItemForm = function (callback) {

    const submit = document.querySelector(".submit-item");
    const form = document.querySelector(".item-form")

    submit.addEventListener("click", () => {
      let newItem = createNewItem(...captureItemDataIntoArray())
      callback(newItem)
      form.reset();
    })
  }

  const submitProjectForm = function (callback) {

    const submit = document.querySelector(".submit-project");
    const form = document.querySelector(".project-form")

    submit.addEventListener("click", () => {
      let newProject = createNewProject(captureProject())
      callback(newProject)
      form.reset();
    })
  }

  return { submitItemForm, submitProjectForm }
})()

export { eventHandlers }