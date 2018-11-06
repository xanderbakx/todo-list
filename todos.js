var todoList = {
  todos: [],

  // Add todo
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },

  // Change todo
  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText; 
  },

  // Delete todo
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
  },

  // Toggle completed
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
  },

  // Toggle all
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed) {
        completedTodos++;
      }
    }
    // If all are true, toggle all to false
    if (totalTodos === completedTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

// Button handlers
var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleTodoPositionInput = document.getElementById('toggleTodoPositionInput');
    todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
    toggleTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

// View
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      // Check whether completed or not
      if (todo.completed) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      todoLi.id = i;
      // DOM manipulation to display todos
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
};

var todosUl = document.querySelector('ul');

todosUl.addEventListener('click', function(event) {
  console.log(event.target.parentNode.id);
});