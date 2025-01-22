// paypal.js
const paypal = require('@paypal/checkout-server-sdk');

const paypal = require('paypal-rest-sdk');

// PayPal Configuration
paypal.configure({
    mode: process.env.PAYPAL_MODE, // 'sandbox' or 'live'
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

// Create PayPal Payment
const createPayment = (paymentData) => {
    const create_payment_json = {
        intent: 'sale',
        payer: {
            payment_method: 'paypal',
        },
        redirect_urls: {
            return_url: paymentData.returnUrl,
            cancel_url: paymentData.cancelUrl,
        },
        transactions: [{
            item_list: { items: paymentData.items },
            amount: {
                currency: 'USD',
                total: paymentData.total,
            },
            description: 'Streetwear Purchase',
        }],
    };

    return new Promise((resolve, reject) => {
        paypal.payment.create(create_payment_json, (error, payment) => {
            if (error) reject(error);
            else resolve(payment);
        });
    });
};

// Execute PayPal Payment
const executePayment = (paymentId, payerId) => {
    const execute_payment_json = { payer_id: payerId };

    return new Promise((resolve, reject) => {
        paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
            if (error) reject(error);
            else resolve(payment);
        });
    });
};

module.exports = { createPayment, executePayment };
