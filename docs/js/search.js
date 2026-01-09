document.addEventListener("DOMContentLoaded", () => {
const input = document.getElementById("search");


input.addEventListener("input", () => {
const q = input.value.toLowerCase();
if (!q) return;


const match = PAGES.find(p => p.title.toLowerCase().includes(q));
if (match) {
window.location.href = match.url;
}
});
});