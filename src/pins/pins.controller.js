const pinModel = require("./pins.model");

const all = async (req, res) => {
const pins = await pinModel.getAll ();
res.json(pins);
}

const create = async (req, res) => {
  const pin = await pinModel.create(req.body);
  res.status(201).json(pin)
};

const get = async (req, res) => {
  const pin = await pinModel.get(req.params.id);
  res.status(200).json(pin)
};

const remove = async (req, res) => {
  const pin = await pinModel.remove(req.params.id);
  res.status(200).json(pin)
};

const update = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const pin = await pinModel.update(id, body);
  res.status(200).json(pin)
};
  


module.exports = {
  all,
  create,
  get,
  remove,
  update,
  
};











