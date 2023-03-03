const User = require("../models/User");

module.exports = class USERAPI {
  static async signupUser(req, res) {
    try {
       await User.save();
      res.status(200).json({message: "User added successfully!"} );
    } catch (err) {
      res.status(400).json({ message: "User Error" });
    }
  }
  static async loginUser(req, res) {
    try {
        const userId = req.params.id;
      const users = await User.findOne(userId);
      res.status(200).json(users);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
 
};
