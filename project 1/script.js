// Get DOM elements
const container = document.getElementById("container");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");

// Fetch users data from API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    // Check if response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  })
  .then(users => {
    // Hide loading text
    loading.style.display = "none";

    // Clear previous content
    container.innerHTML = "";

    // Loop through each user
    users.forEach((user, index) => {
      // Create card element
      const card = document.createElement("div");
      card.classList.add("card");

      // Generate random avatar
      const avatarUrl = `https://i.pravatar.cc/150?img=${index + 1}`;

      // Add user data to card
      card.innerHTML = `
        <img src="${avatarUrl}" alt="User Image">
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
      `;

      // Append card to container
      container.appendChild(card);
    });
  })
  .catch(error => {
    // Hide loading and show error
    loading.style.display = "none";
    errorDiv.textContent = error.message;
  });