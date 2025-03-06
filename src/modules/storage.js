import { defaultList, createNewItem, createNewProject, createNewList, ToDoItem, List, Project } from "./classes";

const localStorageFunctions = (function () {

  const populateStorage = function (list) {
    localStorage.setItem("list", JSON.stringify(list));
  }

  const loadFromStorage = function () {
    let savedList = JSON.parse(localStorage.getItem("list"));
    if (!savedList) return defaultList
    Object.setPrototypeOf(savedList, List.prototype)
    savedList.projects = savedList.projects.map(project => {
      Object.setPrototypeOf(project, Project.prototype)
      project.items = project.items.map(item => {
        Object.setPrototypeOf(item, ToDoItem.prototype)
        return item
      })
      return project
    })
    return savedList
  }
  return { populateStorage, loadFromStorage }
})()

export { localStorageFunctions }