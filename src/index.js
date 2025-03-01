import { createNewItem, createNewProject, defaultList, addProjectToList } from "./modules/to-do-items.js";
import eventHandlers from "./modules/events.js"
import renderElements from "./modules/renders.js"
import { createProjectListElements } from "./modules/projects.js";
import "./modules/style.css"


const defaultProject = function () {
  const defaultProject = createNewProject("Default");
  defaultList.addProjectToList(defaultProject);
  return defaultProject
}

console.log(defaultProject())

eventHandlers.submitProjectForm((newProject) => {
  defaultList.addProjectToList(newProject);
  createProjectListElements.renderProjectsList(defaultList.projects)
  console.log(defaultList)
})
