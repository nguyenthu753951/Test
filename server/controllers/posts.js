import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

export const AddPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export const UpdatePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.nameAdmin === req.body.nameAdmin) {
        try {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedPost);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  //DELETE POST
  export const DeltePost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.nameAdmin === req.body.nameAdmin) {
        try {
          await post.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  //GET POST
  export const GetPost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  };
//GET ALL POSTS
export const GetAllPost = async (req, res) => {
    const nameAdmin = req.query.admin;
    const catName = req.query.cat;
    try {
      let posts;
      if (nameAdmin) {
        posts = await Post.find({ nameAdmin });
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  };  
export default router;