import { createNewItem } from "./to-do-items";

const eventHandlers = function () {

  const openForm = (function () {
    const form = document.querySelector(".open-form");
    const dialog = document.querySelector(".dialog");

    form.addEventListener("click", () => {
      dialog.showModal();
    })
  })()

  const closeForm = (function () {
    const close = document.querySelector(".close-form");
    const dialog = document.querySelector(".dialog");

    close.addEventListener("click", () => {
      dialog.close();
    })
  })()

  const captureFormDataIntoArray = function () {
    let toDoDataMinusPriority = document.querySelectorAll("input");
    let toDoPriorityData = document.querySelector("select").value;
    let toDoDataArr = [];

    toDoDataMinusPriority.forEach(data => {
      toDoDataArr.push(data.value)
    })
    toDoDataArr.push(toDoPriorityData)

    return toDoDataArr;
  }

  const submitForm = (function () {
    const submit = document.querySelector(".submit");
    const form = document.querySelector("form")

    submit.addEventListener("click", () => {
      console.log(createNewItem(...captureFormDataIntoArray()))
      form.reset();
    })
  })()
}

export { eventHandlers }