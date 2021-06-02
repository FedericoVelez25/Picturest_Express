const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    pins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pins'
    }]

});

const UserModel = mongoose.model('users', UserSchema, );

const create = async (user) => {
    const userCreated = await UserModel.create(user);
    return userCreated;
};

const getAll = async () => {
    const users = await UserModel.findOne().populate('pins');
    return users;
};

const search = async (query) => {
    const user = await UserModel.find(query);
    return user;
}

const get = async (ObjectId) => {
    const getUserById = await UserModel.findById(ObjectId).populate('pins');
    return getUserById;
};

const remove = async (ObjectId) => {
    const removeUserById = await UserModel.findByIdAndDelete(ObjectId);
    return removeUserByID;
};
const update = async (id, body) => {
    const updateUserById = await UserModel.findByIdAndUpdate(ObjectId, body);
    return updateUserById;
};

module.exports = {
    create,
    getAll,
    get,
    remove,
    update,
    search,
};