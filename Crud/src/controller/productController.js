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