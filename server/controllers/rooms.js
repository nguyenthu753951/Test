import axios from 'axios';
import {getRooms} from "../lib/getRooms.js";
export const GetRooms = async (req, res) => {
    try {
        res.json(await getRooms());
    } catch (err) {
      res.status(500).json(err);
    }
  };

