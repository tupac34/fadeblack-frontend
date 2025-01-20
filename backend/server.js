const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
const connectDB = require('./config/db');
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Upload progress in JavaScript
const form = document.querySelector(".upload-form");
form.addEventListener("submit", (e) => {
  const fileInput = document.getElementById("file");
  if (fileInput.files.length === 0) {
    alert("Please select a PSD file to upload.");
    e.preventDefault();
    return;
  }
  alert("Uploading your file...");
});
