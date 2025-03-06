import { defaultList, defaultProject, sampleItem } from "./modules/classes.js";
import eventHandlers from "./modules/events.js"
import renderElements from "./modules/renders.js"
import { projectListElements } from "./modules/projects.js";
import { itemElements } from "./modules/todo-items.js";
import "./modules/style.css"
import { localStorageFunctions } from "./modules/storage.js";

const initialization = (function () {

  const initialRender = (function () {
    let currentList = localStorageFunctions.loadFromStorage();
      itemElements.renderItemsList(currentList.projects[0].items)
      projectListElements.renderProjectsList(currentList.projects);
  })()

  eventHandlers.submitProjectForm((newProject) => {
    let currentList = localStorageFunctions.loadFromStorage();
    currentList.addProjectToList(newProject);
    localStorageFunctions.populateStorage(currentList)
    currentList = localStorageFunctions.loadFromStorage();
    projectListElements.renderProjectsList(currentList.projects)
    itemElements.renderEmptyList()
  })

  eventHandlers.deleteProject((projectId) => {
    let currentList = localStorageFunctions.loadFromStorage();
    currentList.removeProjectFromList(projectId)
    localStorageFunctions.populateStorage(currentList)
    currentList = localStorageFunctions.loadFromStorage();
    projectListElements.renderProjectsList(currentList.projects)
    if (currentList.projects.length === 0) {
      itemElements.renderEmptyList()
    } else {
      itemElements.renderItemsList(currentList.projects[currentList.projects.length - 1].items)
    }
  })

  eventHandlers.deleteItem((item, projectItemId) => {
    let currentList = localStorageFunctions.loadFromStorage();
    currentList.projects[projectItemId].removeItemFromProject(item)
    localStorageFunctions.populateStorage(currentList)
    currentList = localStorageFunctions.loadFromStorage();
    itemElements.renderItemsList(currentList.projects[projectItemId].items)
  })

  eventHandlers.submitItemForm((item, projectItemId) => {
    let currentList = localStorageFunctions.loadFromStorage();
    currentList.projects[projectItemId].addItemToProject(item)
    localStorageFunctions.populateStorage(currentList)
    currentList = localStorageFunctions.loadFromStorage();
    itemElements.renderItemsList(currentList.projects[projectItemId].items)
  })

  eventHandlers.submitEditForm((id, values, projectItemId) => {
    let currentList = localStorageFunctions.loadFromStorage();
    currentList.projects[projectItemId].items[id].editName(values[0])
    currentList.projects[projectItemId].items[id].editDesc(values[1])
    currentList.projects[projectItemId].items[id].editDueDate(values[2])
    currentList.projects[projectItemId].items[id].editPriority(values[3])
    localStorageFunctions.populateStorage(currentList)
    currentList = localStorageFunctions.loadFromStorage();
    itemElements.renderItemsList(currentList.projects[projectItemId].items)
  })
})()