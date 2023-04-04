

import express from "express";
import Tips from "../models/tips.js";
import { AddTip, DeleteTip, GetAllTips, GetTip, UpdateTips } from "../controllers/tips.js";


const router = express.Router();

router.post("/", AddTip);

  router.put("/:id", UpdateTips);

  //DELETE 
router.delete("/:id", DeleteTip);

  //GET TIPS
router.get("/:id", GetTip);
//GET ALL Tips
router.get("/", GetAllTips);  

export default router;