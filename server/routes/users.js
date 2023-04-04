import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { DeleteUser, GetAllUser, GetUser, UpdateUser } from "../controllers/users.js";
const router = express.Router();
//update user
router.put("/:id", UpdateUser);

  //delete user
  router.delete("/:id", DeleteUser);

  router.get("/:id", GetUser);
  router.get("/", GetAllUser);

  
  
export default router;