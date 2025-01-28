const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    unit: { type: String, required: true },
    link: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
