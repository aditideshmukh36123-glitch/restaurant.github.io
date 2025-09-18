// Toggle Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  document.body.classList.toggle("menu-open");
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    document.body.classList.remove('menu-open');
  });
});











//card flip

document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!');
    // Later: integrate Firebase functionality here
  });
});


