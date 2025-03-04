const renderElements = (function () {

  const pageElements = (function () {
    const header = document.querySelector("header");
    const sidebar = document.querySelector("nav");
    const projectButtonspan = document.querySelector(".project-button-span");
    const content = document.querySelector("#content");

    return { header, sidebar, content, projectButtonspan }
  })()

  // const createHeaderLayout = (function () {
  //   const header = pageElements.header
  //   header.textContent = "Get To It!"
  //   return header;
  // })()

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

  // const createContentLayout = (function (item) {
  //   const content = pageElements.content
  //   content.textContent = "To do items go here"
  //   return content;
  // })()

  // const createSidebarLayout = (function () {
  //   const sidebar = pageElements.sidebar
  //   sidebar.textContent = "Project"
  //   return sidebar;
  // })()

  const renderSidebar = (function () {
    pageElements.projectButtonspan.appendChild(createNewProjectButton());
  })()

  const renderBody = (function () {
    pageElements.content.appendChild(createNewItemButton());

  })()

  return { renderBody, renderSidebar }
})()

export default renderElements;