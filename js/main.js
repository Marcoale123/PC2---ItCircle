document.addEventListener("DOMContentLoaded", () => {
  // Animar cada sección cuando se cargue
  document.querySelectorAll('.fade-in').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
  });

  // Confirmación antes de salir (opcional UX extra)
  const backButtons = document.querySelectorAll(".back-button");
  backButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const confirmExit = confirm("¿Estás seguro de volver a la página principal?");
      if (!confirmExit) {
        e.preventDefault();
      }
    });
  });
});