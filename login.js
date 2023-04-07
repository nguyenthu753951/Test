import express from "express";
const router = express.Router();
import User from "../models/User.js";
//import Admin from "../models/admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//import {registerMSQL} from "../lib/registerMSQL.js"
import {loginMysql} from "../lib/loginMysql.js"
//User


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