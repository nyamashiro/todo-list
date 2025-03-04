import { createNewItem, createNewProject, defaultList, defaultProject, ToDoItem} from "./modules/classes.js";
import eventHandlers from "./modules/events.js"
import renderElements from "./modules/renders.js"
import { projectListElements } from "./modules/projects.js";
import { itemElements } from "./modules/todo-items.js";
import "./modules/style.css"



  const defaultItem = createNewItem("Sample task", "Desc of the sample task", "2025-03-05", "high");




console.log(defaultList)
console.log(defaultProject)
console.log(defaultItem)

eventHandlers.submitProjectForm((newProject) => {
  defaultList.addProjectToList(newProject);
  projectListElements.renderProjectsList(defaultList.projects)
  console.log(defaultList)
})

eventHandlers.deleteProject((project) => {
  defaultList.removeProjectFromList(project)
  projectListElements.renderProjectsList(defaultList.projects)
})

eventHandlers.deleteItem((item) => {
  defaultProject.removeItemFromProject(item)
  itemElements.renderItemsList(defaultProject.items)
})

eventHandlers.submitItemForm((item) => {
  console.log(item)
  defaultProject.addItemToProject(item)
  console.log(defaultProject)
  itemElements.renderItemsList(defaultProject.items)
})

defaultList.addProjectToList(defaultProject);
projectListElements.renderProjectsList(defaultList.projects);

defaultProject.addItemToProject(defaultItem)
itemElements.renderItemsList(defaultProject.items)

eventHandlers.submitEditForm((id, values) => {
defaultProject.items[id].editName(values[0])
defaultProject.items[id].editDesc(values[1])
defaultProject.items[id].editDueDate(values[2])
defaultProject.items[id].editPriority(values[3])

itemElements.renderItemsList(defaultProject.items)

})
