class ToDoItem {
  constructor(name, desc, dueDate, priority) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  editName(newName) {
    this.name = newName;
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
    this.name = "Default List"
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

  removeItemFromProject(index) {
    this.items.splice(index, 1)
  }
}

const createNewItem = function (name, desc, dueDate, priority) {
  return new ToDoItem(name, desc, dueDate, priority);
}

const createNewProject = function (name) {
  return new Project(name);
}

const createNewList = function () {
  return new List();
}



const defaultList = createNewList();

const defaultProject = createNewProject("Default Project");

const sampleItem = createNewItem("Sample task", "Description of the sample task", "2025-03-05", "high")

export { createNewItem, createNewProject, defaultList, defaultProject, sampleItem, ToDoItem}

