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
    } bg-black`;

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
    titleEl.className = `text-lg font-semibold ${task.completed ? 'line-through text-black' : ''}`;
    titleEl.textContent = task.title;
    titleEl.style.color = "white"

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



document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});




// HTML theke chatbot window, chatbox ar input field ke dhora hocche
const chatWindow = document.getElementById("chatbot-window"); // Chatbot window ta
const chatbox = document.getElementById("chatbox");           // Jeikhane message gula show hobe
const input = document.getElementById("user-input");          // User input likhbe je box e

input.style.color ="black"

// Ei function ta chatbot window ke show/hide korar jonno
function toggleChat() {
  chatWindow.classList.toggle("hidden");
}

// Ei function message add kore chatbox e — user ba bot-er message
function addMessage(sender, text) {
  const msgWrapper = document.createElement("div");
  msgWrapper.className = `flex w-full ${sender === "user" ? "justify-end" : "justify-start"}`;

  const bubble = document.createElement("div");
  bubble.className = `max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed shadow 
    ${sender === "user"
      ? "bg-blue-600 text-white rounded-br-none"
      : "bg-gray-200 text-gray-800 rounded-bl-none"}`;

  // If bot, convert Markdown to HTML
  if (sender === "bot") {
    bubble.innerHTML = marked.parse(text);
  } else {
    bubble.textContent = text;
  }

  msgWrapper.appendChild(bubble);
  chatbox.appendChild(msgWrapper);
  chatbox.scrollTop = chatbox.scrollHeight;
}


// Main function — user message pathay, loading dekhay, bot reply ante Gemini API call kore
async function sendMessage() {
  const userText = input.value.trim(); // User input ta nicche and trim kore (extra space badh dicche)
  if (!userText) return; // Jodi kichu na likhe pathay, taile return kore

  addMessage("user", userText); // User message chatbox e dekhanor jonno
  input.value = ""; // Input field ta empty kore dicche

  // Loading message add kora hocche — "Typing..." dekhabe bot typing korar moto
  const loading = document.createElement("div");
  loading.className = "text-left";
  loading.innerHTML = `
  <div class="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl max-w-[75%] animate-pulse">
    Typing<span class="dot1">.</span><span class="dot2">.</span><span class="dot3">.</span>
  </div>`;

  chatbox.appendChild(loading);
  chatbox.scrollTop = chatbox.scrollHeight;

  try {
    // Gemini API te POST request pathano hocche user er message niye
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB5tkKtQJMBS_CIsbDZYDooCYAa_r0DnGY', {
      method: "POST", // POST method use kora hocche
      headers: {
        "Content-Type": "application/json" // JSON format bole dicche
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userText }] }] // API ke user input pathano hocche
      })
      
    });

    const data = await response.json(); // API theke JSON response nicche
    loading.remove(); // Typing message ta remove kore dicche

    // Bot-er reply extract kora hocche
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (reply) {
      addMessage("bot", reply); // Bot reply thakle show kora hocche
    } else {
      addMessage("bot", "❌ No response received."); // Kono reply na paile error message
    }
  } catch (err) {
    loading.remove(); // Error holeo "Typing..." message ta remove kore
    addMessage("bot", "⚠️ Error connecting to Gemini API."); // Connection error message
    console.error(err); // Console e error ta print korbe (developer jante parbe)
  }
}
