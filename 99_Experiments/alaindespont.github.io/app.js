const filterButtons = document.querySelectorAll(".filters button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projects.forEach(project => {
      project.style.display =
        filter === "all" || project.dataset.category === filter
          ? "block"
          : "none";
    });

  });

});

document.querySelector(".filters button.active").click();
// Changement langue
const langButtons = document.querySelectorAll(".lang-switch button");
const translatables = document.querySelectorAll("[data-fr]");

function setLanguage(lang) {
  langButtons.forEach(b => b.classList.remove("active"));
  document.querySelector(`[data-lang="${lang}"]`).classList.add("active");

  translatables.forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

// Francais par defaut
setLanguage("fr");

langButtons.forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});
