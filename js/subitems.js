// Menu data
const menuData = {
  pizza: [
    {name: 'Margherita', price: '₹200', img:'images/pizza1.jpg', desc:'Classic cheese pizza'},
    {name: 'Pepperoni', price: '₹250', img:'images/pizza2.jpg', desc:'Spicy pepperoni pizza'},
  ],
  pasta: [
    {name: 'Alfredo', price:'₹180', img:'images/pasta1.jpg', desc:'Creamy white sauce pasta'},
    {name: 'Arrabiata', price:'₹170', img:'images/pasta2.jpg', desc:'Spicy red sauce pasta'},
  ],
  coffee: [
    {name:'Espresso', price:'₹80', img:'images/coffee1.jpg', desc:'Strong and rich'},
    {name:'Cappuccino', price:'₹100', img:'images/coffee2.jpg', desc:'Foamy milk coffee'},
  ],
  burger: [
    {name:'Classic Burger', price:'₹150', img:'images/burger1.jpg', desc:'Juicy beef patty with cheese'},
  ],
  noodles: [
    {name:'Hakka Noodles', price:'₹120', img:'images/noodles1.jpg', desc:'Stir fried spicy noodles'},
  ]
};

// Get category from URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Reference to section
const section = document.getElementById('subitems-section');

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display sub-items
if(category && menuData[category]) {
  section.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;
  const grid = document.createElement('div');
  grid.classList.add('subitems-grid');

  menuData[category].forEach(item => {
    const div = document.createElement('div');
    div.classList.add('subitem-card');
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <p>${item.desc}</p>
      <button class="add-cart">Add to Cart</button>
    `;
    grid.appendChild(div);

    // Add to Cart functionality
    div.querySelector('.add-cart').addEventListener('click', () => {
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${item.name} added to cart!`);
    });
  });

  section.appendChild(grid);
} else {
  section.innerHTML = `<h2>No items found</h2>`;
}
