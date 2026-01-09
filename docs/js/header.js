document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.className = "wiki-header";

  header.innerHTML = `
    <div class="logo">
      <a href="/OfCrownsAndCouncils_Wiki/index.html">
        Of Crowns and Councils
      </a>
    </div>

    <div class="search-container">
      <input
        id="search"
        type="search"
        placeholder="Search the wiki…"
        autocomplete="off"
      />
      <ul id="search-results" class="search-results"></ul>
    </div>
  `;

  document.body.prepend(header);
});
