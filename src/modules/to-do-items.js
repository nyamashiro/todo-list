class ToDoItem {
  constructor(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const createNewList = function (...items) {
  return items;
}

const createNewProject = function (list) {
  return [list];
}

const createNewItem = function (title, desc, dueDate, priority) {
  return new ToDoItem(title, desc, dueDate, priority)
}



export { ToDoItem, createNewItem, createNewList, createNewProject }

