const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});

const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('active');
  });
});

const contactForm = document.querySelector('#contact-form');
const responseText = document.querySelector('.form-response');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const formspreeEndpoint = contactForm.dataset.formspreeEndpoint;
    if (formspreeEndpoint) {
      fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      })
        .then((res) => {
          if (res.ok) {
            responseText.textContent = 'Thanks — your message was sent. We will reply to the email you provided.';
            contactForm.reset();
          } else {
            return res.json().then((data) => Promise.reject(data));
          }
        })
        .catch((error) => {
          console.error('Formspree submit error:', error);
          responseText.textContent = 'Sorry — there was a problem sending your message. You can also email us at nimiety.sydney@gmail.com.';
        });
    } else {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          responseText.textContent = 'Thanks — your message was sent. We will reply to the email you provided.';
          contactForm.reset();
        })
        .catch((error) => {
          console.error('Form submit error:', error);
          responseText.textContent = 'Sorry — there was a problem sending your message. You can also email us at nimiety.sydney@gmail.com.';
        });
    }
  });
}

const cart = [];
const cartCount = document.querySelector('#cart-count');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('#cart-total');
const checkoutButton = document.querySelector('#checkout-button');
const checkoutForm = document.querySelector('#checkout-form');
const checkoutMessage = document.querySelector('.checkout-message');

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function updateCart() {
  if (!cartItems || !cartCount || !cartTotal) return;

  cartItems.innerHTML = '';
  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  cart.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `<span>${item.qty}× ${item.name}</span><strong>${formatCurrency(item.qty * item.price)}</strong>`;
    cartItems.appendChild(row);
  });

  cartCount.textContent = `${cart.reduce((sum, item) => sum + item.qty, 0)}`;
  cartTotal.textContent = formatCurrency(total);

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-notice">Your cart is empty. Add merch to begin.</p>';
  }
}

function addItemToCart(name, price) {
  const existing = cart.find((item) => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCart();
}

const addButtons = document.querySelectorAll('.add-to-cart');
addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    if (!card) return;
    const name = card.dataset.name;
    const price = Number(card.dataset.price);
    addItemToCart(name, price);
  });
});

checkoutButton?.addEventListener('click', () => {
  checkoutForm?.classList.toggle('hidden');
});

checkoutForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = checkoutForm.querySelector('input[name="name"]').value;
  checkoutMessage.textContent = `Thanks, ${name || 'friend'} — we received your order request. We will message you with payment details.`;
  checkoutForm.reset();
  cart.length = 0;
  updateCart();
});

updateCart();
