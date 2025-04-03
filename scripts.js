// Array de productos para búsqueda y carrito
const products = [
    { name: 'Ramo de Rosas', price: 25, description: 'Hermoso ramo de rosas rojas, ideal para cualquier ocasión especial.', image: 'Imagenes HeyFlores.jpg/Flor 1.jpg' },
    { name: 'Ramo de Lirios', price: 30, description: 'Hermoso ramo de lirios para alegrar tu día.', image: 'Imagenes HeyFlores.jpg/Flor 2.jpg' },
    { name: 'Ramo de space',   price: 30, description: 'Hermoso ramo de space para alegrar tu día.', imgage: 'Imagenes HeyFlores.jpg/Flor 3.jpg'},
    { name: 'Ramo de space',   price: 30, description: 'Hermoso ramo de space para alegrar tu día.', imgage: 'Imagenes HeyFlores.jpg/Flor 4.jpg'},
    { name: 'Ramo de space',   price: 30, description: 'Hermoso ramo de space para alegrar tu día.', imgage: 'Imagenes HeyFlores.jpg/Flor 5.jpg'},
    { name: 'Ramo de space',   price: 30, description: 'Hermoso ramo de space para alegrar tu día.', imgage: 'Imagenes HeyFlores.jpg/Flor 6.jpg'},
    { name: 'Ramo de space',   price: 30, description: 'Hermoso ramo de space para alegrar tu día.', imgage: 'Imagenes HeyFlores.jpg/Flor 7.jpg'},
    { name: 'Ramo de space',   price: 30, description: 'Hermoso ramo de space para alegrar tu día.', imgage: 'Imagenes HeyFlores.jpg/Flor 8.jpg'},
    { name: 'Ramo de space',   price: 30, description: 'Hermoso ramo de space para alegrar tu día.', imgage: 'Imagenes HeyFlores.jpg/Flor 9.jpg'},
    { name: 'Ramo de space',   price: 30, description: 'Hermoso ramo de space para alegrar tu día.', imgage: 'Imagenes HeyFlores.jpg/Flor 10.jpg'},
    { name: 'Ramo de space',   price: 30, description: 'Hermoso ramo de space para alegrar tu día.', imgage: 'Imagenes HeyFlores.jpg/Flor 11.jpg'},
    { name: 'Ramo de space',   price: 30, description: 'Hermoso ramo de space para alegrar tu día.', imgage: 'Imagenes HeyFlores.jpg/Flor 12.jpg'}
];

let cart = [];

// Función para mostrar los detalles del producto en el modal
function showDetails(name, description, price) {
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-price').innerText = `$${price}`;
    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Función para añadir productos al carrito
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Eliminar</button>`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
    document.getElementById('cart-count').innerText = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

// Función de búsqueda de productos
function searchProducts() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
    );

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onclick="showDetails('${product.name}', '${product.description}', ${product.price})">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Añadir al carrito</button>
        `;
        searchResults.appendChild(productDiv);
    });
}
