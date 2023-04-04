

import express from "express";
import Tips from "../models/tips.js";


const router = express.Router();

export const AddTip = async (req, res) => {
    const newTips = new Tips(req.body);
    try {
      const savedTips = await newTips.save();
      res.status(200).json(savedTips);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export const UpdateTips = async (req, res) => {
    try {
      const tips = await Tips.findById(req.params.id);
      if (tips.nameAdmin === req.body.nameAdmin) {
        try {
          const updatedTips = await Tips.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedTips);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your Tips!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  //DELETE 
  export const DeleteTip = async (req, res) => {
    try {
      const tips = await Tips.findById(req.params.id);
      if (tips.nameAdmin === req.body.nameAdmin) {
        try {
          await tips.delete();
          res.status(200).json("Tips has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your Típ!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  //GET TIPS
  export const GetTip = async (req, res) => {
    try {
      const Tip = await Tips.findById(req.params.id);
      res.status(200).json(Tip);
    } catch (err) {
      res.status(500).json(err);
    }
  };
//GET ALL Tips
export const GetAllTips = async (req, res) => {
    const nameAdmin = req.query.admin;
    const catName = req.query.cat;
    try {
      let Tip;
      if (nameAdmin) {
        Tip = await Tips.find({ nameAdmin });
      } else {
        Tip = await Tips.find();
      }
      res.status(200).json(Tip);
    } catch (err) {
      res.status(500).json(err);
    }
  };  

export default router;