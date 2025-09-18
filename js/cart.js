// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Function to render cart items
function renderCart() {
  cartItemsContainer.innerHTML = '';
  if(cart.length === 0){
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    cartTotal.textContent = '0';
    return;
  }

  // Calculate quantity for each unique item
  const itemMap = {};
  cart.forEach(item => {
    if(itemMap[item.name]){
      itemMap[item.name].quantity += 1;
    } else {
      itemMap[item.name] = {...item, quantity: 1};
    }
  });

  let total = 0;

  for(const key in itemMap){
    const item = itemMap[key];
    const priceNumber = parseInt(item.price.replace('₹',''));
    const itemTotal = priceNumber * item.quantity;
    total += itemTotal;

    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-info">
        <h4>${item.name}</h4>
        <p>Price: ${item.price}</p>
        <p>Quantity: 
          <button class="dec">-</button> 
          <span>${item.quantity}</span> 
          <button class="inc">+</button>
        </p>
        <p>Subtotal: ₹${itemTotal}</p>
        <button class="remove">Remove</button>
      </div>
    `;

    cartItemsContainer.appendChild(div);

    // Increase quantity
    div.querySelector('.inc').addEventListener('click', () => {
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });

    // Decrease quantity
    div.querySelector('.dec').addEventListener('click', () => {
      const index = cart.findIndex(i => i.name === item.name);
      if(index !== -1) {
        cart.splice(index,1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
      }
    });

    // Remove item completely
    div.querySelector('.remove').addEventListener('click', () => {
      cart = cart.filter(i => i.name !== item.name);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    });
  }

  cartTotal.textContent = total;
}

// Checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
  if(cart.length === 0){
    alert('Your cart is empty!');
    return;
  }
  alert(`Thank you for your order! Total bill: ₹${cartTotal.textContent}`);
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
});

// Initial render
renderCart();
