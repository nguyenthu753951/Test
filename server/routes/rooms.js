import express from "express";
import { GetRooms } from "../controllers/rooms.js";
import { Resevation } from "../controllers/reservation.js";

const router = express.Router();
router.get("/", GetRooms); 

router.post("/reserva", Resevation); 
export default router;