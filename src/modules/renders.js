const renderElements = (function () {

  const pageElements = (function () {
    const header = document.querySelector("header");
    const sidebar = document.querySelector("nav");
    const content = document.querySelector("#content");

    return { header, sidebar, content }
  })()

  const createHeaderContent = (function () {
    const header = pageElements.header
    header.textContent = "Get To It!"
    return header;
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

  const createMainContent = function (item) {
    const content = pageElements.content
    content.textContent = "To do items go here"
    return content;
  }

  const createSidebarContent = (function (project) {
    const sidebar = pageElements.sidebar
    sidebar.textContent = "Project"
    return sidebar;
  })()

  const renderHeader = function () {

  }

  const renderSidebar = (function () {
    pageElements.sidebar.appendChild(createNewProjectButton());
  })()

  const renderBody = (function () {
    pageElements.content.appendChild(createNewItemButton());

  })()

  return { renderBody, renderHeader, renderSidebar }
})()

export default renderElements;