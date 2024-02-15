const userModel = require('../models/userModels')

const registerController = async(req,res) => {
    try {
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).send(" NewUser Registered Successfully ");
    } catch (error) {
        res.status(400).send("Error", error)
        console.log(error)
    }
}

const loginController = async(req,res) => {
    try {
        const { userId, password } = req.body;
        const user = await userModel.findOne({
          userId,
          password,
          verified: false,
        });
        res.status(200).send("Login Successfully");
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
  registerController,loginController
};
