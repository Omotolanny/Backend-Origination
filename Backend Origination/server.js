const express = require('express');

const userRoutes = require('./src/routes/userRoutes');

const app = express();
app.use(express.json());


app.use('/api/users', userRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));


// const express = require('express');


// const app = express();
// const PORT = 3000;

// app.use(express.json());

// let users = [
//   { id: 1, name: "Tolani" },
//   { id: 2, name: "Tomiwa" }
// ];
  
// app.get('/api/users', (req, res) => {
//   console.log(req.body);
//   res.status(200).json(users); 
// });


// app.post('/api/users', (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name
//   };
//   users.push(newUser);
//   res.status(201).json(newUser); 
// });


// app.get('/api/info', (res) => {
//   res.json({
//     mySentence: "Successfully wrote my first backend code, and the server is running smoothly",
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

