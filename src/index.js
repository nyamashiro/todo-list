import { createNewItem, createNewProject, defaultList} from "./modules/to-do-items.js";
import eventHandlers from "./modules/events.js"
import renderElements from "./modules/renders.js"
import { projectListElements } from "./modules/projects.js";
import "./modules/style.css"


const defaultProject = function () {
  const defaultProject = createNewProject("Default");
  defaultList.addProjectToList(defaultProject);
  return defaultProject
}

console.log(defaultProject())
console.log(defaultList)

eventHandlers.submitProjectForm((newProject) => {
  defaultList.addProjectToList(newProject);
  projectListElements.renderProjectsList(defaultList.projects)
  console.log(defaultList)
})

eventHandlers.deleteProject((project) => {
  defaultList.removeProjectFromList(project)
  projectListElements.renderProjectsList(defaultList.projects)
})

projectListElements.renderProjectsList(defaultList.projects);