import { defaultList, defaultProject, sampleItem} from "./modules/classes.js";
import eventHandlers from "./modules/events.js"
import renderElements from "./modules/renders.js"
import { projectListElements } from "./modules/projects.js";
import { itemElements } from "./modules/todo-items.js";
import "./modules/style.css"

defaultList.addProjectToList(defaultProject);
projectListElements.renderProjectsList(defaultList.projects);

defaultProject.addItemToProject(sampleItem)
itemElements.renderItemsList(defaultProject.items)

eventHandlers.submitProjectForm((newProject) => {
  defaultList.addProjectToList(newProject);
  projectListElements.renderProjectsList(defaultList.projects)
  itemElements.renderEmptyList()
  console.log(defaultList)
})

eventHandlers.deleteProject((projectId) => {
  defaultList.removeProjectFromList(projectId)
  projectListElements.renderProjectsList(defaultList.projects)
  itemElements.renderEmptyList();
})

eventHandlers.deleteItem((item, projectItemId) => {
  defaultList.projects[projectItemId].removeItemFromProject(item)
  itemElements.renderItemsList(defaultList.projects[projectItemId].items)
})

eventHandlers.submitItemForm((item, projectItemId) => {
  defaultList.projects[projectItemId].addItemToProject(item)
  itemElements.renderItemsList(defaultList.projects[projectItemId].items)
})

eventHandlers.submitEditForm((id, values, projectItemId) => {
defaultList.projects[projectItemId].items[id].editName(values[0])
defaultList.projects[projectItemId].items[id].editDesc(values[1])
defaultList.projects[projectItemId].items[id].editDueDate(values[2])
defaultList.projects[projectItemId].items[id].editPriority(values[3])

itemElements.renderItemsList(defaultList.projects[projectItemId].items)
})
