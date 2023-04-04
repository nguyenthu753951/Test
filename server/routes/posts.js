import express from "express";

import { AddPost, DeltePost, GetAllPost, GetPost, UpdatePost } from "../controllers/posts.js";

const router = express.Router();

router.post("/", AddPost);

  router.put("/:id", UpdatePost);

  //DELETE POST
router.delete("/:id", DeltePost);

  //GET POST
router.get("/:id", GetPost);
//GET ALL POSTS
router.get("/", GetAllPost);  
export default router;