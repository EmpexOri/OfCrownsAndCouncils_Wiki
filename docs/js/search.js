// search.js
document.addEventListener("DOMContentLoaded", () => {
  if (typeof PAGES === "undefined") {
    console.warn("PAGES not loaded");
    return;
  }

  const waitForInput = () => {
    const input = document.getElementById("search");
    const results = document.getElementById("search-results");

    if (!input || !results) {
      setTimeout(waitForInput, 20); // retry in 20ms
      return;
    }

    // Dropdown search logic
    input.addEventListener("input", () => {
      const q = input.value.toLowerCase().trim();
      results.innerHTML = "";
      if (!q) { results.style.display = "none"; return; }

      const matches = PAGES
        .filter(p => p.title.toLowerCase().includes(q))
        .slice(0, 8);

      matches.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p.title;
        li.onclick = () => window.location.href = p.url;
        results.appendChild(li);
      });

      results.style.display = matches.length ? "block" : "none";
    });

    input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        const first = results.querySelector("li");
        if (first) first.click();
      }
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", e => {
      if (!e.target.closest(".search-container")) {
        results.style.display = "none";
      }
    });
  };

  waitForInput();
});
