const express = require("express");
const itemModel=require('../models/itemModel')
const { getItemController,addItemController } = require("../controllers/itemController");
const router = express.Router();

// GET route
router.get("/getallitems", getItemController);

//Post route
router.post("/additem",addItemController)

module.exports = router;
