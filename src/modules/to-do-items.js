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

class ToDoList {
  constructor(item) {
    this.items = [item];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(title) {
    this.items.filter((item) => item.title !== title)
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  addList(list) {
    this.list.push(list)
  }
}

const createNewItem = function (title, desc, dueDate, priority) {
  return new ToDoItem(title, desc, dueDate, priority)
}

const createNewList = function () {
  return new ToDoList();
}

const createNewProject = function (name) {
  return new Project(name)
}



export { ToDoItem, ToDoList, Project, createNewItem, createNewList, createNewProject }

