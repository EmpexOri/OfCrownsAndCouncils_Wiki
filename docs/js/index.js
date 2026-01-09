// index.js
document.addEventListener("DOMContentLoaded", () => {
  if (typeof PAGES === "undefined") return;

  const container = document.getElementById("category-container");
  if (!container) return;

  // Group pages by tag
  const categories = {};
  PAGES.forEach(page => {
    const tag = page.tag || "Uncategorized";
    if (!categories[tag]) categories[tag] = [];
    categories[tag].push(page);
  });

  // Create a section for each category
  Object.keys(categories).forEach(tag => {
    const section = document.createElement("section");
    section.className = "category-section";

    const h2 = document.createElement("h2");
    h2.textContent = tag;
    section.appendChild(h2);

    const scrollContainer = document.createElement("div");
    scrollContainer.className = "category-scroll";

    categories[tag].forEach(page => {
      const link = document.createElement("a");
      link.href = page.url;
      link.textContent = page.title;
      link.className = "category-page-link";
      scrollContainer.appendChild(link);
    });

    section.appendChild(scrollContainer);
    container.appendChild(section);
  });
});
