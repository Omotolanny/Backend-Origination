// const products = [
//     { id: 1, name: "Laptop", price: 120000 },
//     { id: 2, name: "Mouse", price: 3000 }
// ];

// module.exports = products;

const { Pool } = require('pg');

// Create a new pool using your pgAdmin credentials
const pool = new Pool({
  user: 'postgres',           // Your default username
  host: 'localhost',          // Your machine
  database: 'product_api',    // The name you gave it in pgAdmin
  password: 'YOUR_PASSWORD',  // The master password you created
  port: 5432,                 // The standard Postgres port
});

module.exports = pool;