document.addEventListener("DOMContentLoaded", () => {
  const waitForInput = () => {
    const input = document.getElementById("search");
    if (!input) {
      setTimeout(waitForInput, 50); // retry in 50ms
      return;
    }

    const results = document.getElementById("search-results");
    if (!results) return;

    input.addEventListener("input", () => {
      const q = input.value.toLowerCase().trim();
      results.innerHTML = "";
      if (!q) { results.style.display = "none"; return; }

      const matches = PAGES.filter(p => p.title.toLowerCase().includes(q)).slice(0, 8);
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
  };

  waitForInput();
});
