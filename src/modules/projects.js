const createProjectListElements = (function () {
  const renderProjectsList = function (projects) {
    const projectUl = document.querySelector(".project-list");
    projectUl.textContent = "";
    projects.forEach((project, index) => {
      let li = document.createElement("li");
      let deleteButton = createProjectDeleteButton();
      li.classList.add(`${index}`);
      li.textContent = project.name;
      li.appendChild(deleteButton)
      projectUl.appendChild(li);
    });
  }

  const createProjectDeleteButton = function() {
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-project");
    deleteButton.textContent = "X"
    return deleteButton
  }

  return {renderProjectsList}
})()





export { createProjectListElements }