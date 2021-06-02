const userModel =require('./users.model');
const bcrypt = require('bcrypt');
require //acá debo poner el modelo de los post

// esta parte será el código válido
const getAllUsers = async (req, res) => {
  const usersData = await userModel.getAll();
  return res.json(usersData);
} 
 
const createUser = async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const user = await userModel.create({
    email: req.body.email,
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password, salt),
  });

  return res.status(201).json(user); // To Do: return token insead of user dara
};

const getUser = async (req, res) => {
  const userData = await userModel.get(req.body.name);
  return res.status(200).json(userData);
};  

const removeUser = async (req, res) => {
  const user = userModel.remove(req.params.name);
  return res.status(200).json(user);
}



module.exports = {
  getAllUsers,
  createUser,
  getUser,
  removeUser
};
