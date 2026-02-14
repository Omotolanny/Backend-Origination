const users = require('../config/db.js');

exports.getAllUsers = (req, res) => {
    res.status(200).json(users);
};

exports.createUser = (req, res) => {
    const { name } = req.body; //grabs the name the user responded with
    
    // ERROR RESPONSE
    if (!name) {
        return res.status(400).json({ 
            success: false, 
            message: "Name is required to create a user" 
        });
    }

    const newUser = { id: users.length + 1, name };
    users.push(newUser);
    res.status(201).json(newUser);
};