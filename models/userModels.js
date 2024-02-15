const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    },
    verified: {
      type:Boolean,
  }
}, { timestamp: true });

const Users = mongoose.model("users", itemSchema)
module.exports=Users
