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
    this.todos.forEach(function(todo) {
      if (todo.completed) {
        completedTodos++;
      }
    });

    this.todos.forEach(function(todo) {
      // If all are true, toggle all to false
      if (totalTodos === completedTodos) {
        todo.completed = false;
        // Else, make everything true
      } else {
        todo.completed = true;
      }
    });
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
    var changeTodoPositionInput = document.getElementById(
      'changeTodoPositionInput'
    );
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(index) {
    todoList.deleteTodo(index);
    view.displayTodos();
  },
  toggleCompleted: function(index) {
    todoList.toggleCompleted(index);
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

    todoList.todos.forEach(function(todo, index) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      // Check whether completed or not
      if (todo.completed) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todoLi.id = index;
      // DOM manipulation to display todos
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todoLi.appendChild(this.createToggleButton());
      todoLi.appendChild(this.createEditButton());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  createEditButton: function() {
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'editButton';
    return editButton;
  },
  createToggleButton: function() {
    var toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle';
    toggleButton.className = 'toggleButton';
    return toggleButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function(event) {
      // Get the element that was clicked
      var elementClicked = event.target;

      // Check if element is a delete button
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
      if (elementClicked.className === 'toggleButton') {
        // Console.log(event.target);
        handlers.toggleCompleted(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
