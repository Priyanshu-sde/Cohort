// function addTodo() {
//     const value = document.querySelector("input").value;
//     const spanEl = document.createElement("span");
//     const buttonEl = document.createElement("button");
//     spanEl.innerHTML = value;
//     buttonEl.innerHTML = "Delete";
//     const newTodoDivEl = document.createElement("div");
//     newTodoDivEl.appendChild(buttonEl);
//     newTodoDivEl.appendChild(spanEl);
//     document.querySelector("body").appendChild(newTodoDivEl); 
// }

let todos = [];
    function addTodo() {
      todos.push({
        title: document.querySelector("input").value
      })
      render();
    }

    function deleteTodo() {
      
      render();
    }
 
    function render() {
      
    }