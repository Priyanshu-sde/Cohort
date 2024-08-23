
let todos = [];
let ctr = 0;
function render(todos) {
    const todoList = document.getElementById("root");
    todoList.innerHTML = '';
    ctr = 0;
    todos.forEach(todo => {
        const div = document.createElement("div");
        const h1 = document.createElement("h2");
        const deleteButton = document.createElement("button")
        deleteButton.setAttribute('onclick','deleteTodo('+ ctr + ')');
        deleteButton.innerHTML = 'Delete'
        h1.textContent = todo.title;
        div.appendChild(h1);
        div.appendChild(deleteButton);        
        div.setAttribute('data-id',ctr);
        div.setAttribute('class','tasks');
        todoList.appendChild(div);
        ctr++;
    });
    

}

function addTodo() {
    if(document.getElementById("newInput").value == ''){
        alert('Please enter task Name');
        return;
    }
    todos.push({
        id: ctr,
        title: document.getElementById("newInput").value,
    })
    document.getElementById("newInput").value = "";
    render(todos);
    ctr++;

}

function deleteTodo(index) {
    todos.splice(index,1);
    render(todos);
}