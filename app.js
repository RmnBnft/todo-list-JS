const formAddTask = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const taskList = document.querySelector('.list')
const ItemPatern = document.querySelector('.list-item')
formAddTask.addEventListener('submit', handleForm);

function handleForm(e) {
    e.preventDefault();

    const newTask = {}

    inputs.forEach(input => {
        const nameAttribute = input.getAttribute('name')
        newTask[nameAttribute] = input.value
    })
    formAddTask.reset()
    console.log(newTask);
    createNewTask(newTask)
}

function createNewTask(newTask) {
    const taskItem = document.createElement('li')
    taskItem.innerHTML =
    `
        <h2>${newTask.title}</h2>
        <p>${newTask.description}</p>
        <span>${newTask.tag}</span>
        <input type="checkbox">
    `
    taskList.appendChild(taskItem)
    displayList()
}

function displayList() {
    ItemPatern.classList.add('hidden')
}