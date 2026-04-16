const container = document.getElementById("container");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");

async function loadTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }

    const todos = await response.json();

    loading.style.display = "none";
    container.innerHTML = "";

    const visibleTodos = todos.slice(0, 20);

    visibleTodos.forEach(todo => {
      const card = document.createElement("div");
      card.className = "card";

      const status = todo.completed ? "Completed ✅" : "Pending ❌";

      card.innerHTML = `
        <h3>Task #${todo.id}</h3>
        <p>${todo.title}</p>
        <p><strong>Status:</strong> ${status}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    loading.style.display = "none";
    errorDiv.textContent = error.message;
  }
}

loadTodos();