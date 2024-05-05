let cart = [];

function addToCart(name, price) {
    let found = false;
    cart.forEach(item => {
        if (item.name === name) {
            item.quantity++;
            found = true;
        }
    });
    if (!found) {
        cart.push({ name: name, price: price, quantity: 1 });
    }
    updateCart();
    showPopup(); // Call the function to show the popup
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    const productImages = {
        'Rose Plant': 'app_img/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.webp',
    'Litchi Plant': 'app_img/nurserylive-litchi-tree-grown-through-seeds-plant.jpg',
    'Mango Plant': 'app_img/alphonso-mango-plant-ratnagiri-grafted-1-healthy-live-plant-kadiyam-nursery-1_1200x1200.webp',
    'Curry Plant': 'app_img/DSC6338.webp',
    'Lemon Plant': 'app_img/71zinrf5WwL.jpg',
    'Lucky Bamboo Plant': 'app_img/33397_good-luck-2-layer-lucky-bamboo.jpeg',
    'Marigold Plant': 'app_img/marigold1-500x500.webp',
    'Hibiscus Plant': 'app_img/Desi-Hibiscus-Flower-Plant-04.webp',
    'Holy Basil Plant': 'app_img/51bNWUg1+YL._AC_UF1000,1000_QL80_.jpg'
    };

    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';

        // Get the image path for the current product from the productImages object
        const imagePath = productImages[item.name] || 'app_img/default-image.jpg';

        li.innerHTML = `
            <img src="${imagePath}" alt="${item.name}">
            <span>${item.name} - ₹${item.price.toFixed(2)} x ${item.quantity}</span>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });
    document.getElementById('cart-total').textContent = `Total: ₹${total.toFixed(2)}`;
}

// Function to show popup
function showPopup() {
    document.getElementById("popup").style.display = "block";
    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
    }, 3000); // 3 seconds
}



// // Function to get the path of the image based on the product name
// function getImagePath(productName) {
//     // This is a simple example, you should replace it with your actual image paths
//     if (productName === 'Rose Plant') {
//         return 'app_img/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.webp';
//     } else if (productName === 'Plant 2') {
//         return 'app_img/pexels-cottonbro-4505178 - Copy.jpg';
//     }
//     // Add more conditions for other products as needed
// }