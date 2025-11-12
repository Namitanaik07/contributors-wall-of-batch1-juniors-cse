// Fetch contributors list from contributors.json and display on the page
fetch("contributors.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("contributors");
    data.forEach(person => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${person.name}</h3>
        <p>"${person.message}"</p>
        <a href="https://github.com/${person.github}" target="_blank">@${person.github}</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading contributors:", error);
  });
