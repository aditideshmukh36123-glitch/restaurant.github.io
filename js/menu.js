// menu.js

// Function to redirect to subitems page with category parameter
function goToSubitems(category) {
  if (!category) return;
  // Redirect to subitems.html and pass the category in the URL
  window.location.href = `subitems.html?category=${category}`;
}

// Optional: You can also add a hover effect via JS if needed
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px) scale(1.03)';
    card.style.boxShadow = '0 12px 25px rgba(0,0,0,0.25)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
  });
});





















