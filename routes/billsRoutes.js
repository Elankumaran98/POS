const express = require("express");
const billsRouter = express.Router();

billsRouter.post("/addbills", async (req, res) => {
  try {
    const newBills = new Bills(req.body);
    await newBills.save();
    res.send("Bill Created Successfully!");
  } catch (error) {
    console.log(error);
  }
});

billsRouter.get("/getbills", async (req, res) => {
  try {
    const bills = await Bills.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
});

module.exports = billsRouter;
