document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskTitleInput = document.getElementById('new-task-title');
    const newTaskDescInput = document.getElementById('new-task-desc');
    const tasksList = document.getElementById('tasks-list');

    addTaskBtn.addEventListener('click', () => {
        const taskTitle = newTaskTitleInput.value.trim();
        const taskDesc = newTaskDescInput.value.trim();
        if (taskTitle !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span class="task-title">${taskTitle}</span>
                <span class="task-desc">${taskDesc}</span>
                <button class="delete-btn">Delete</button>
            `;
            tasksList.appendChild(taskItem);
            newTaskTitleInput.value = '';
            newTaskDescInput.value = '';
        }
    });

    tasksList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const taskItem = event.target.parentElement;
            tasksList.removeChild(taskItem);
        }
    });
});
