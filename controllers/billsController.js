const Bills = require("../models/billsModel");

const addBillsController = async (req, res) => {
  try {
    const newBill = new Bills(req.body);
    await newBill.save();
    res.send("Bill Created Successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
 const getBillsController = async (req, res) => {
  try {
    const bills = await Bills.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
  addBillsController,getBillsController
};
