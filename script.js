
document.querySelectorAll(".project-title").forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const link = button.getAttribute("data-link");
    window.open(link, "_blank");
  });
});
