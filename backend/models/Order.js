// order.js

// Handle form submission
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const payment = document.getElementById('payment').value;

    // Calculate total price based on selected product
    const prices = {
        "FadeBlack Hoodie": 750,
        "FadeBlack T-shirt": 450,
        "FadeBlack Cap": 300
    };
    const totalPrice = prices[product] * quantity;

    // Create order object
    const order = {
        name,
        email,
        address,
        product,
        quantity,
        payment,
        totalPrice,
        date: new Date().toLocaleString()
    };

    // Save order to localStorage
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Update order history on the page
    updateOrderHistory();

    // Send email notification (mock function)
    sendEmailNotification(order);

    // Reset form
    document.getElementById('orderForm').reset();

    alert('Your order has been placed successfully!');
});

// Update order history
function updateOrderHistory() {
    const orderHistoryList = document.getElementById('orderHistoryList');
    orderHistoryList.innerHTML = '';

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Product:</strong> ${order.product}<br>
            <strong>Quantity:</strong> ${order.quantity}<br>
            <strong>Total Price:</strong> ZAR ${order.totalPrice}<br>
            <strong>Date:</strong> ${order.date}<br>
        `;
        orderHistoryList.appendChild(listItem);
    });
}

// Mock function to send email notification
function sendEmailNotification(order) {
    console.log(`Email sent to ${order.email}:`);
    console.log(`Hello ${order.name}, your order for ${order.quantity} x ${order.product} has been received. Total: ZAR ${order.totalPrice}.`);
}

// Load order history on page load
window.onload = updateOrderHistory;
