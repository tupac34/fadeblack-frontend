document.addEventListener('DOMContentLoaded', () => {
    const orderDetails = JSON.parse(sessionStorage.getItem('orderDetails'));

    if (!orderDetails) {
        document.body.innerHTML = '<h2>No order details found. Please return to the shop and try again.</h2>';
        return;
    }

    const confirmationContainer = document.querySelector('#confirmation-container');

    confirmationContainer.innerHTML = `
        <h2>Thank you for your order, ${orderDetails.name}!</h2>
        <p>A confirmation email has been sent to ${orderDetails.email}.</p>
        <h3>Shipping Address:</h3>
        <p>${orderDetails.address}, ${orderDetails.city}, ${orderDetails.state} ${orderDetails.zip}</p>
        <h3>Order Summary:</h3>
        <ul>
            ${orderDetails.items.map(item => `
                <li>${item.name} - $${item.price} x ${item.quantity}</li>
            `).join('')}
        </ul>
        <p>Total: $${orderDetails.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
    `;

    // Clear cart data after order confirmation
    localStorage.removeItem('cartItems');
});
