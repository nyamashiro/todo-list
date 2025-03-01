import { createNewItem, createNewProject, defaultList, addProjectToList } from "./modules/to-do-items.js";
import eventHandlers from "./modules/events.js"
import renderElements from "./modules/renders.js"
import "./modules/style.css"


const createDefaultProject = (function () {
  const defaultProject = createNewProject("Default");
  defaultList.addProjectToList(defaultProject);
})()

eventHandlers.submitProjectForm((newProject) => {
  defaultList.addProjectToList(newProject);
  console.log(defaultList)
})
