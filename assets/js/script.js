const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeSidebar = document.getElementById("closeSidebar");
const header = document.getElementById("header");
const cart = document.querySelector(".cart");
const sidebarLinks = sidebar.querySelectorAll("a");

/* OPEN MENU */
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

/* CLOSE MENU (single source of truth) */
function closeMenu() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  hamburger.classList.remove("active");
  document.body.style.overflow = "";
}

/* Close triggers */
closeSidebar.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

/* Close when clicking any sidebar link */
sidebarLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

/* Close on ESC key */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar.classList.contains("active")) {
    closeMenu();
  }
});

/* Header background on scroll */
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 60);
});

/* Cart click animation */
cart.addEventListener("click", () => {
  cart.classList.add("cart-bounce");
  setTimeout(() => cart.classList.remove("cart-bounce"), 400);
});



document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const icon = btn.querySelector('i');

        btn.classList.toggle('active');

        if (btn.classList.contains('active')) {
            icon.classList.remove('bi-heart');
            icon.classList.add('bi-heart-fill');
        } else {
            icon.classList.remove('bi-heart-fill');
            icon.classList.add('bi-heart');
        }
    });
});