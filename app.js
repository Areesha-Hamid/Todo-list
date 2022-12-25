const form = document.querySelector('form');
const newTodo = document.querySelector('#new-todo');
const tasks = document.querySelector('.tasks');
const filterTodo = document.querySelector('#filter-todo');

form.addEventListener("submit",(e) => {
    e.preventDefault();
    const todo = newTodo.value;

    const task = document.createElement('div');
    task.classList.add('task');

    const content = document.createElement('div');
    content.classList.add('content');

    const input = document.createElement('input');
    input.setAttribute("readonly","readonly");
    input.classList.add("input2");
    input.value = todo;
    

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.classList.add('button-style');
    editBtn.innerHTML = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.classList.add('button-style');
    deleteButton.innerHTML = 'Delete';

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete');
    completeButton.classList.add('button-style');
    completeButton.innerHTML = 'Complete';

    content.appendChild(input);
    task.appendChild(content);
    tasks.appendChild(task);

    actions.appendChild(editBtn);
    actions.appendChild(deleteButton);
    actions.appendChild(completeButton);
    task.appendChild(actions);

    deleteButton.addEventListener('click', (e) => {
        tasks.removeChild(task);
    })
    
    editBtn.addEventListener('click',(e) => {
        if (editBtn.textContent.toLowerCase() == 'edit'){
            input.focus();
            input.removeAttribute('readonly');
            editBtn.textContent = "Save";
        }
        else{
            input.setAttribute("readonly","readonly");
            editBtn.textContent = "Edit";
        }
        
    });

    completeButton.addEventListener('click', () => {
        if(completeButton.textContent.toLowerCase() == 'complete'){
            input.classList.add('line');
        }
    })
})

