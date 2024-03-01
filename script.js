// Function to open the task form dialog
function openTaskFormDialog() {
    const taskFormDialog = document.getElementById('taskFormDialog');
    taskFormDialog.style.display = 'block';
}

// Function to close the task form dialog
function closeTaskFormDialog() {
    const taskFormDialog = document.getElementById('taskFormDialog');
    taskFormDialog.style.display = 'none';
}

// Function to add a new task
function addTask() {
    const taskTitle = document.getElementById('taskTitle').value.trim();
    const taskDescription = document.getElementById('taskDescription').value.trim();
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    if (taskTitle) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task">${taskTitle}</span>
            <span class="task-details">${taskDescription} | Due: ${dueDate}</span>
            <span class="delete-btn" onclick="deleteTask(this)">❌</span>
            <ul class="checklist"></ul>
        `;
        li.classList.add(`priority-${priority}`);
        taskList.appendChild(li);

        // Clear input fields
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('dueDate').value = '';

        // Close the task form dialog
        closeTaskFormDialog();
    }
}

// Function to delete a task
function deleteTask(deleteBtn) {
    const li = deleteBtn.parentElement;
    li.remove();
}

