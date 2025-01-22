document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.querySelector('#checkout-form');

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(checkoutForm);
        const orderDetails = {
            name: formData.get('name'),
            email: formData.get('email'),
            address: formData.get('address'),
            city: formData.get('city'),
            state: formData.get('state'),
            zip: formData.get('zip'),
            items: JSON.parse(localStorage.getItem('cartItems')) || []
        };

        if (orderDetails.items.length === 0) {
            alert('Your cart is empty. Please add items before checking out.');
            return;
        }

        // Save order details in session storage
        sessionStorage.setItem('orderDetails', JSON.stringify(orderDetails));

        // Redirect to confirmation page
        window.location.href = 'confirmation.html';
    });
});