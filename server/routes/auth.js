import express from "express";
const router = express.Router();
import { Login, LoginAd, RegisterAd, Resgister } from "../controllers/auth.js";

//User
router.post("/register", Resgister);

router.post("/login", Login);

//Admin
router.post("/registerAd", RegisterAd);

router.post("/loginAd", LoginAd);
export default router;
