const renderElements = (function () {

  const pageElements = (function () {
    const header = document.querySelector("header");
    const sidebar = document.querySelector("nav");
    const projectButtonspan = document.querySelector(".project-button-span");
    const content = document.querySelector("#content");

    return { header, sidebar, content, projectButtonspan }
  })()
  
  const createNewItemButton = function () {
    const itemButton = document.createElement("button");
    itemButton.textContent = "New Item"
    itemButton.classList.add("new-item");
    return itemButton
  }

  const createNewProjectButton = function () {
    const projectButton = document.createElement("button");
    projectButton.textContent = "New Project"
    projectButton.classList.add("new-project");
    return projectButton
  }

  const renderSidebar = (function () {
    pageElements.projectButtonspan.appendChild(createNewProjectButton());
  })()

  const renderBody = (function () {
    pageElements.content.appendChild(createNewItemButton());

  })()

  return { renderBody, renderSidebar }
})()

export default renderElements;