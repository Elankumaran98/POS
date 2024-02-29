const express = require("express");
const {addBillsController,
  getBillsController}= require ('../controllers/billsController')
const billsRouter = express.Router();

billsRouter.post("/addbills", addBillsController);

billsRouter.get("/getbills",getBillsController);

module.exports = billsRouter;
