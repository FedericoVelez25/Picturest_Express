const userModel = require('../users/users.model');
const jwt = require('jsonwebtoken');
const { response } = require("express");
const { token } = require('morgan');
const bcrypt = require('bcrypt');


const login = async (req, res) => {
    const user = await userModel.search({ 
        email: req.body.email, 
    })
    console.log('user is' , req.body);
    if (user) {
        const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {
                const token = jwt.sign({user},process.env.TOKEN_SECRET);
                return res.json(token);
            } else {
                return res.status(401).json("wrong email or password")
            }
    }
    return res.status(400).json('Not found');
}

module.exports = {
    login,
}