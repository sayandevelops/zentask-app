const taskListContainer = document.getElementById('task-list');
let tasks = [];

// Load tasks from local storage on page load
window.addEventListener('DOMContentLoaded', () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
});

// Add task
document.getElementById('add-task-btn').addEventListener('click', () => {
  const title = document.getElementById('task-title').value.trim();
  const desc = document.getElementById('task-desc').value.trim();
  const date = document.getElementById('task-date').value;
  const priority = document.getElementById('task-priority').value;

  if (title === '') {
    alert('Please enter a task title!');
    return;
  }

  const task = {
    id: Date.now(),
    title,
    desc,
    date,
    priority,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  renderTasks();

  // Clear input fields
  document.getElementById('task-title').value = '';
  document.getElementById('task-desc').value = '';
  document.getElementById('task-date').value = '';
  document.getElementById('task-priority').value = 'low';
});

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  taskListContainer.innerHTML = '';

  tasks.slice().reverse().forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.className = `p-4 rounded-lg shadow-md border-l-4 mb-2 flex items-start gap-3 ${
      task.priority === 'high' ? 'border-red-500' : task.priority === 'medium' ? 'border-yellow-500' : 'border-green-500'
    } bg-white`;

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.className = 'accent-green-500 mt-1';
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      saveTasks();
      renderTasks(); // Re-render to update visual
    });

    const contentDiv = document.createElement('div');
    contentDiv.className = 'flex-1';

    const titleEl = document.createElement('h3');
    titleEl.className = `text-lg font-semibold ${task.completed ? 'line-through text-gray-400' : ''}`;
    titleEl.textContent = task.title;

    const descEl = document.createElement('p');
    descEl.className = `text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-600'}`;
    descEl.textContent = task.desc || '';

    const dateEl = document.createElement('p');
    dateEl.className = 'text-xs text-gray-400 mt-1';
    dateEl.textContent = `📅 ${task.date || 'No due date'}`;

    const btnContainer = document.createElement('div');
    btnContainer.className = 'flex gap-2';

    const editBtn = document.createElement('button');
    editBtn.className = 'text-blue-500 hover:text-blue-700 font-bold';
    editBtn.textContent = 'Edit task';
    editBtn.onclick = () => EditTask(task.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'text-red-500 hover:text-red-700';
    deleteBtn.textContent = '🗑';
    deleteBtn.onclick = () => deleteTask(task.id);

    btnContainer.append(editBtn, deleteBtn);
    contentDiv.append(titleEl, descEl, dateEl, btnContainer);

    taskCard.appendChild(checkbox);
    taskCard.appendChild(contentDiv);
    taskListContainer.appendChild(taskCard);
  });

  updateMotivationProgress();
}

function EditTask(id) {
  const taskToEdit = tasks.find(task => task.id === id);
  if (!taskToEdit) return alert("Task not found!");

  document.getElementById('task-title').value = taskToEdit.title;
  document.getElementById('task-desc').value = taskToEdit.desc;
  document.getElementById('task-date').value = taskToEdit.date;
  document.getElementById('task-priority').value = taskToEdit.priority;

  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasks();
  renderTasks();
}

// Enter key submits task
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('add-task-btn').click();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const quoteEl = document.getElementById('motivation-quote');
  const imageEl = document.getElementById('motivation-img');
  const progressEl = document.getElementById('progress-bar');
  const statusEl = document.getElementById('task-status');

  let current = 0;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(motivations);

  function updateQuote() {
    const { quote, image } = motivations[current];
    quoteEl.textContent = `"${quote}"`;
    imageEl.src = image;

    updateMotivationProgress();
  }

  updateQuote();
  setInterval(() => {
    current = (current + 1) % motivations.length;
    updateQuote();
  }, 5000);
});

function updateMotivationProgress() {
  const progressEl = document.getElementById('progress-bar');
  const statusEl = document.getElementById('task-status');
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percent = total === 0 ? 0 : Math.floor((completed / total) * 100);

  progressEl.style.width = `${percent}%`;
  statusEl.textContent = `Tasks Completed: ${completed}/${total}`;
}

// Clear all tasks
document.addEventListener("DOMContentLoaded", () => {
  const clearBtn = document.getElementById("clear-tasks-btn");

  clearBtn.addEventListener("click", () => {
    if (confirm("Clear all tasks?")) {
      taskListContainer.innerHTML = "";
      tasks = [];
      saveTasks();
      updateMotivationProgress();
    }
  });
});
