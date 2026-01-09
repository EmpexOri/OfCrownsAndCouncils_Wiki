document.addEventListener("DOMContentLoaded", () => {
  if (typeof PAGES === "undefined") {
    console.warn("PAGES not loaded");
    return;
  }

  const input = document.getElementById("search");
  if (!input) {
    console.warn("Search input not found");
    return;
  }

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase().trim();
    if (!q) return;

    const match = PAGES.find(p =>
      p.title.toLowerCase().includes(q)
    );

    if (match) {
      window.location.href = match.url;
    }
  });
});
