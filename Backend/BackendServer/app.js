const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Make sure this is at the top before accessing process.env


const productRouter = require('./routes/ProductRouter');
const port = process.env.PORT || 3000;
const url = process.env.MONGODB_URL;

mongoose.connect(url).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/products', productRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
