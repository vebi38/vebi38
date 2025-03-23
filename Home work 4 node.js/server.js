const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

const PRODUCTS_FILE = path.join(__dirname, 'products.json');

// Helper function to read products
const readProducts = () => {
    const data = fs.readFileSync(PRODUCTS_FILE, 'utf8');
    return JSON.parse(data);
};

// Helper function to write products
const writeProducts = (products) => {
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf8');
};

// Get product by ID
app.get('/products/:id', (req, res) => {
    const products = readProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));

    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
});

// Delete product by ID
app.delete('/products/:id', (req, res) => {
    let products = readProducts();
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));

    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    const deletedProduct = products.splice(productIndex, 1);
    writeProducts(products);

    res.json({ message: 'Product deleted', product: deletedProduct });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
