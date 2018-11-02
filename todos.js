var todoList = {
  todos: [],

  // Display
  displayTodos: function() {
    console.log('My Todos:', this.todos)
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
  }
};

