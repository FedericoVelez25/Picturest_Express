const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema({
    name: String,
    urlImg: String,
});

const PinModel = mongoose.model('pins', PinSchema, );

const create = async (pin) => {
    const pinCreated = await PinModel.create(pin);
    return pinCreated;
};

const getAll = async () => {
    const pins = await PinModel.find();
    return pins;
};

const get = async (id) => {
    const pinById = await PinModel.findById(id);
    return pinById;
};

const remove = async (id) => {
    const removePinById = await PinModel.findByIdAndDelete(id);
    return removePinById;
};
const update = async (id, body) => {
    const updatePinById = await PinModel.findByIdAndUpdate(id, body);
    return updatePinById;
};

module.exports = {
    create,
    getAll,
    get,
    remove,
    update,
};