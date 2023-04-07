import express from "express";
const router = express.Router();
import User from "../models/User.js";
//import Admin from "../models/admin.js";
import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";
import {registerMSQL} from "../lib/registerMSQL.js"
//import {loginMysql} from "../lib/loginMysql.js"

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