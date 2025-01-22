const express = require('express');
const router = express.Router();
const { createPayment, executePayment } = require('../utils/paypal');

// Create Payment Route
router.post('/create', async (req, res) => {
    try {
        const payment = await createPayment(req.body);
        res.json(payment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Execute Payment Route
router.post('/execute', async (req, res) => {
    try {
        const { paymentId, payerId } = req.body;
        const result = await executePayment(paymentId, payerId);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
