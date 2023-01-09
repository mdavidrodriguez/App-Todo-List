// Arreglo vacio
const todos = JSON.parse(localStorage.getItem("todos")) || [];

const guardadolocal = (todos) => {
  const todosString = JSON.stringify(todos); //trasforma a un string
  localStorage.setItem("todos", todosString);
};

const render = () => {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  const todosTemplate = todos.map((t) => "<li>" + t + "</li>");
  todoList.innerHTML = todosTemplate.join("");
  const elementos = document.querySelectorAll("#todo-list li");
  elementos.forEach((elemento, i) => {
    elemento.addEventListener("click", () => {
      elemento.parentNode.removeChild(elemento);
      todos.splice(i, 1);
      guardadolocal(todos);
      render();
    });
  });
};
window.onload = () => {
  render();
  const form = document.getElementById("todo-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    const todoText = todo.value;
    todo.value = "";
    todos.push(todoText);
    guardadolocal(todos);
    render();

    // for(let i = 0; i < todos.length; i++){
    //   todoList.innerHTML += '<li>' +  todos[i] + '</li>';
    // }
  };
};


