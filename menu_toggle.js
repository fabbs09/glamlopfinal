// ================= HAMBURGUESA =================

// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".Menu-Horizontal");

// Proteger por si en alguna página no existe el menú
if (btn && menu) {
  // Al hacer clic en el botón de hamburguesa
  btn.addEventListener("click", () => {
    // Alterna (agrega o quita) la clase "active" en el menú
    // Esto hace que se muestre o se oculte
    menu.classList.toggle("active");
  });
}

// ================= SUBMENÚ "TIPS DE BELLEZA" EN MÓVIL =================

// Selecciona el enlace de "Tips de Belleza" (el <a> dentro del li.has-submenu)
const submenuLink = document.querySelector(".has-submenu > a");

if (submenuLink) {
  submenuLink.addEventListener("click", function (e) {
    // Solo queremos este comportamiento en pantallas pequeñas
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Evita que salte directo al #tips

      // this = <a>, su padre es el <li class="has-submenu">
      const li = this.parentElement;

      // Alternamos la clase .open para mostrar u ocultar el submenú
      li.classList.toggle("open");
    }
  });
}
