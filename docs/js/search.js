document.addEventListener("DOMContentLoaded", () => {
  if (typeof PAGES === "undefined") return;

  const input = document.getElementById("search");
  const results = document.getElementById("search-results");
  if (!input || !results) return;

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase().trim();
    results.innerHTML = "";

    if (!q) {
      results.style.display = "none";
      return;
    }

    const matches = PAGES
      .filter(p => p.title.toLowerCase().includes(q))
      .slice(0, 8);

    if (!matches.length) {
      results.style.display = "none";
      return;
    }

    matches.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.title;
      li.onclick = () => window.location.href = p.url;
      results.appendChild(li);
    });

    results.style.display = "block";
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const first = results.querySelector("li");
      if (first) first.click();
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      results.style.display = "none";
    }
  });
});
