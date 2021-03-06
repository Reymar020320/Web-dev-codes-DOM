// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
function loadEventListeners() {
    // DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter task even
    filter.addEventListener('keyup', filterTasks);
}

// Get task from Local Storage 
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task) {
        // Create li element
        const li = document.createElement('li');
        // Add Class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(task));
        // Create Element
        const link = document.createElement('a');
        // Add Class
        link.className = 'delete-item secondary-content';
        // Add icon
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);
        // Append li to ul
        taskList.appendChild(li);
    });
}

// Add Task
function addTask(e){
    if(taskInput.value === '') {
        alert('Add a Task');
    } else {
        // Create li element
        const li = document.createElement('li');
        // Add Class
        li.className = 'collection-item';
        // Create text node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create Element
        const link = document.createElement('a');
        // Add Class
        link.className = 'delete-item secondary-content';
        // Add icon
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);
        // Append li to ul
        taskList.appendChild(li);
        // Store in LS
        storeTaskInLocalStorage(taskInput.value);
        // Clear input
        taskInput.value = '';
    }
    e.preventDefault();
}

// Store Task in local storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
            // Remove for Local Storage
            removeTasksFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Remove task local storage function
function removeTasksFromLocalStorage(taskItem) {
    let tasks 
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(function(task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify());
}

function clearTasks() {
    if (confirm('Are you sure?')) {
        taskList.innerHTML = '';
        // Clear from LS
        clearTasksFromLocalStorage();
    }
}

// Clear Tasks from LS
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

function filterTasks(e) {
    // console.log(e.target);
    const text = e.target.value.toLowerCase();
    console.log(text);

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

loadEventListeners();