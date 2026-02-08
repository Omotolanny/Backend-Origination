const products = require('../config/db');


exports.getAllProducts = (req, res) => {
    res.status(200).json({
        success: true,
        data: products
    });
};


exports.createProduct = (req, res) => {
    const { name, price } = req.body;

   
    if (!name) {
        return res.status(400).json({ 
            success: false, 
            message: "Please provide a product name" 
        });
    }

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price || 0
    };

    products.push(newProduct);
    res.status(201).json({ success: true, data: newProduct });
};

// 3. Logic to UPDATE a product
exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    // Find the product by ID
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Update the fields
    if (name) product.name = name;
    if (price) product.price = price;

    res.status(200).json({ success: true, data: product });
};

// 4. Logic to DELETE a product
exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    const index = products.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    products.splice(index, 1);
    res.status(200).json({ success: true, message: "Product deleted successfully" });
};