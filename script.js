const search = document.getElementById("search");
const empty = document.getElementById("empty");
const commands = document.querySelectorAll("article.command");
const categories = document.querySelectorAll("section.category");

search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  let anyVisible = false;

  commands.forEach((card) => {
    const hay = card.dataset.search || "";
    const match = !q || hay.includes(q);
    card.style.display = match ? "" : "none";
    if (match) anyVisible = true;
  });

  categories.forEach((section) => {
    const hasVisible = Array.from(section.querySelectorAll("article.command"))
      .some((c) => c.style.display !== "none");
    section.style.display = hasVisible ? "" : "none";
  });

  empty.style.display = anyVisible ? "none" : "block";
});
