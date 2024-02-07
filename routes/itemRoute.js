const express = require("express");
const { getItemController,addItemController } = require("../controllers/itemController");
const router = express.Router();

// GET route
router.get("/getallitems", getItemController);

//Post route
router.post("/additem",addItemController)

module.exports = router;
