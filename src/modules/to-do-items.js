class ToDoItem {
  constructor(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  editTitle(newTitle) {
    this.title = newTitle;
  }

  editDesc(newDesc) {
    this.desc = newDesc;
  }

  editDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  editPriority(newPriority) {
    this.priority = newPriority;
  }
}

class List {
  constructor() {
    this.name = "Default"
    this.projects = [];
  }

  addProjectToList(project) {
    this.projects.push(project);

  }

  removeProjectFromList(index) {
    this.projects.splice(index, 1);
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  addItemToProject(item) {
    this.items.push(item)
  }
}

const createNewItem = function (title, desc, dueDate, priority) {
  return new ToDoItem(title, desc, dueDate, priority);
}

const createNewProject = function (name) {
  return new Project(name);
}

const defaultList = new List();

const addProjectToList = function () {
  const newList = new List();
  return newList.addProjectToList;
}



export { createNewItem, createNewProject, defaultList, addProjectToList }

