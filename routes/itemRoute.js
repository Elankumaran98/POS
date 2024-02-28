const express = require("express");
const {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
} = require("../controllers/itemController");
const router = express.Router();

// GET route
router.get("/getallitems", getItemController);

//Post route
router.post("/additem",addItemController)

//Put route
router.put("/edititem", editItemController)

//Delete route
router.delete("/deleteitem/:itemId", deleteItemController);

module.exports = router;
