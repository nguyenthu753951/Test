import express from "express";
const router = express.Router();
import User from "../models/User.js";
import Admin from "../models/admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {registerMSQL} from "../lib/registerMSQL.js"
import {loginMysql} from "../lib/loginMysql.js"
//User
export const Resgister = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    await registerMSQL(req.body)
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user){
      return res.status(400).json("Email not found!");
    }
    const validated = await bcrypt.compare(req.body.password, user.password);
    if(!validated){ return res.status(400).json("Wrong password or username!")}

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT
    );
    const userDt = await loginMysql(req.body)
    const { password, ...others} = user._doc;
    res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .cookie("iduser", userDt)
    .status(200)
    .json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Admin
export const RegisterAd =  async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newAdmin = new Admin({
      nameAdmin: req.body.nameAdmin,
      email: req.body.email,
      password: hashedPass,
    });
    const admin = await newAdmin.save();
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const LoginAd =  async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if(!admin){
      return res.status(400).json("Wrong credentials!");
    }
    const validated = await bcrypt.compare(req.body.password, admin.password);
    if(!validated) { return res.status(400).json("Wrong credentials!")}
    const { password, ...others } = admin._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};
export default router;
