// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  // Render existing todos
  function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${todo}</span>
        <button onclick="deleteTodo(${index})">Delete</button>
      `;
      todoList.appendChild(li);
    });
  }

  // Add new todo
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = input.value.trim();
    if (newTodo) {
      todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(todos));
      input.value = '';
      renderTodos();
    }
  });

  // Delete todo
  window.deleteTodo = (index) => {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
  };

  // Initial render
  renderTodos();
});