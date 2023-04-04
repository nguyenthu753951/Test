import express from "express";
import Pin from "../models/Pin.js"
import { AddPins, FindPin, GetPin } from "../controllers/pins.js";
const router = express.Router();

router.post("/", AddPins);
  
  //get all pins
  router.get("/", GetPin);
  router.delete("/:id", FindPin);
export default router;