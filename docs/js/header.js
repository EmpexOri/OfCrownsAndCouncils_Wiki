document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.className = "wiki-header";

  header.innerHTML = `
    <div class="logo">
      <a href="/OfCrownsAndCouncils_Wiki/index.html">
        Of Crowns and Councils
      </a>
    </div>
    <input id="search" type="search" placeholder="Search the wiki…" />
  `;

  document.body.prepend(header);
});
