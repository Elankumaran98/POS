const express = require("express");
const { getItemController,addItemController,editItemController } = require("../controllers/itemController");
const router = express.Router();

// GET route
router.get("/getallitems", getItemController);

//Post route
router.post("/additem",addItemController)

//Put route
router.put("/edititem",editItemController)

module.exports = router;
