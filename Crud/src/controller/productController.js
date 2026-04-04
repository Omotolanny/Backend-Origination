// const products = require('../config/db');

// exports.getAllProducts = (req, res) => {
//     res.status(200).json({
//         success: true,
//         data: products
//     });
// };

// exports.createProduct = (req, res) => {
//     const { name, price } = req.body;
 
//     if (!name) {
//         return res.status(400).json({ 
//             success: false, 
//             message: "Please provide a product name" 
//         });
//     }

//     const newProduct = {
//         id: products.length + 1,
//         name: name,
//         price: price || 0
//     };

//     products.push(newProduct);
//     res.status(201).json({ success: true, data: newProduct });
// };

// exports.updateProduct = (req, res) => {
//     const { id } = req.params;
//     const { name, price } = req.body;

//     const product = products.find(p => p.id === parseInt(id));

//     if (!product) {
//         return res.status(404).json({ success: false, message: "Product not found" });
//     }

//     if (name) product.name = name;
//     if (price) product.price = price;

//     res.status(200).json({ success: true, data: product });
// };

// exports.deleteProduct = (req, res) => {
//     const { id } = req.params;
//     const index = products.findIndex(p => p.id === parseInt(id));

//     if (index === -1) {
//         return res.status(404).json({ success: false, message: "Product not found" });
//     }

//     products.splice(index, 1);
//     res.status(200).json({ success: true, message: "Product deleted successfully" });
// };

const pool = require('../config/db');

exports.getAllProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id ASC');
    res.json(result.rows); // result.rows contains the actual data from pgAdmin
  } catch (err) {
    res.status(500).json({ error: "Database error: " + err.message });
  }
};



exports.createProduct = async (req, res) => {
  const { name, price } = req.body;

  // DATA VALIDATION 
  if (!name || name.trim() === "") {
    return res.status(400).json({ error: "Product name is required and cannot be empty." });
  }

  if (price !== undefined && isNaN(price)) {
    return res.status(400).json({ error: "Price must be a valid number." });
  }

  try {
    const query = 'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(query, [name, price || 0]); // 
    res.status(201).json(result.rows[0]); 
  } catch (err) {
    // ERROR HANDLING 
    console.error(err.message);
    res.status(500).json({ error: "A server error occurred while creating the product." });
  }
};