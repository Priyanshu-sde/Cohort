async function fetchTasks() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        const tasks = await response.json();
        tasks.forEach(task => addTaskToDOM(task.title, task.completed));


    }
    catch(error){
        console.log('error fetching tasks:', error);
    }
}

function addTaskToDOM(taskText, isCompleted = false) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = taskText;
    if(isCompleted){
        li.classList.add('completed');
    }
    li.addEventListener('click', () => toggleTaskCompletion(li));
    taskList.appendChild(li)
}

function toggleTaskCompletion(taskElement) {
    taskElement.classList.toggle('completed');
    saveTask();
}

function saveTasks(){
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(li => {
        task.push({
            text: li.textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {addTaskToDOM(task.text, task.completed)})
}

function filterTasks(filter){
    const tasks =  document.querySelectorAll('#task-list li');
    tasks.forEach(task => {
        switch(filter) {
            case 'completed' :
                task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                break;
            case 'pending' :
                task.style.display = !task.classList.contains('completed') ? 'flex' : 'none';
                break;
            default:
                task.style.display = 'flex';
        }
    });
}

document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    if(taskInput.value.trim()) {
        addTaskToDOM(taskInput.value.trim());
        taskInput.value = '';
        saveTasks();
    }
})

document.getElementById('show-all').addEventListener('click', () => filterTasks ('all'));
document.getElementById('show-completed').addEventListener('click', () => filterTasks('completed'));
document.getElementById('show-pending').addEventListener('click', () => filterTasks('pending'));


fetchTasks();
loadTasks();