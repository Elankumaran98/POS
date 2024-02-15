const itemModel = require("../models/itemModel");

const getItemController = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving items"); // Send error response
  }
};

const addItemController = async (req, res) => {
  try {
    const newItem = new itemModel(req.body);
    await newItem.save();
    res.status(200).send("Item Added successfully");
  } catch (error) {
    res.status(400).send("Error" + error);
    console.log(error);
  }
};

const editItemController = async (req, res) => {
  try {
    await itemModel.findOneAndUpdate({ _id: req.body.itemId }, req.body);
    res.status(201).send("Item updated successfully")
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports = { getItemController, addItemController, editItemController };
