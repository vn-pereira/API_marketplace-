const mongoose = require("../config/database");
const userSchema = require("../models/User");
const User = new mongoose.model("User", userSchema);

module.exports = class userController {
  static getAll() {
    return (req, resp) => {
      User.find({ active: true }, (err, result) => {
        if (err) return err;
        resp.send(result);
      });
    };
  }

  static getById() {
    return (req, resp) => {
      const id = req.params.id;
      User.findOne({ _id: id }, (err, result) => {
        if (err) return err;
        resp.send(result);
      });
    };
  }

  static createUser() {
    return async (req, resp) => {
      const {
        username,
        fullName,
        email,
        password,
        CPF,
        contact,
        userAddress,
      } = req.body;

      const user = new User({
        username,
        fullName,
        email,
        password,
        CPF,
        contact,
        userAddress,
        active: true,
      });

      await user.save((err) => {
        if (err) resp.send(err);
      });
      resp.send("User created successful!");
    };
  }

  static updateUser() {
    return async (req, resp) => {
      const {
        username,
        fullName,
        email,
        password,
        CPF,
        contact,
        userAddress,
      } = req.body;

      const query = { _id: req.params.id };

      User.updateOne(
        query,
        {
          $set: {
            username: username,
            fullName: fullName,
            email: email,
            password: password,
            CPF: CPF,
            contact: contact,
            userAddress: userAddress,
          },
        },
        (err) => {
          if (err) resp.send(err);

          resp.status(200).send("Updated data as successful");
        }
      );
    };
  }

  static deleteUser() {
    return async (req, resp) => {
      const id = req.params.id;
      await User.updateOne(
        { _id: id },
        { $set: { active: false, deleteUserOn: new Date() } }
      );
      resp.send("User deleted");
    };
  }
};
