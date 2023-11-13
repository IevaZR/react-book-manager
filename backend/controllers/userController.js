import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password.toString(), salt);
    const user = new userModel({ ...req.body, password: hashedPassword });
    const data = await user.save();

    res.status(201).json("User created");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(201).send(users);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userModel.find(
      { email: req.params.email },
      { password: 0 }
    );
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await userModel.deleteOne({ id: req.params._id });
    res.status(201).send("User delete successfully");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userModel.findOneAndUpdate(
      { id: req.params.email },
      { $set: req.body },
      { new: true }
    );
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
