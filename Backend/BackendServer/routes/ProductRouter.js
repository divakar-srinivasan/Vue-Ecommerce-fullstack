const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// POST route to add a product
router.post('/add', upload.single('image'), async (req, res) => {
    try {
        const { name, category, price, unit, link } = req.body;
        // const image = req.file.buffer; // Get the binary data of the uploaded image

        const newProduct = new Product({
            name,
            category,
            price,
            unit,
            link
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully', product: newProduct });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find(); // Use `find()` instead of `findAll()`
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        // Convert binary image to base64
        const base64Image = product.image.toString('base64');
        res.json({ ...product.toObject(), image: base64Image });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;



