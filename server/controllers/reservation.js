import { Booking } from "../lib/booking.js";

export const Resevation = async (req, res) => {
    try {
      await Booking(req.body)
      res.status(200).json({message: "Dath phong thanh cong"});
    } catch (err) {
      res.status(500).json(err);
    }
  };