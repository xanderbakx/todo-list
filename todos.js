var todoList = {
  todos: [],

  // Display
  displayTodos: function() {
    console.log('My Todos:');

    if (this.todos.length === 0) {
      console.log('You don\'t have any todos');
    } else {
      for(var i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].completed ? '(x)' : '( )');
        console.log(this.todos[i].todoText);
      }
    }
  },

  // Add todo
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  // Change todo
  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText; 
    this.displayTodos();
  },

  // Delete todo
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },

  // Toggle completed
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
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
        this.todos[i].completed === false;
      }
    }
  }
};

