import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
import categoryRoute from "./routes/categories.js";
import pinRoute from "./routes/pins.js";
import adminRoute from "./routes/admin.js";
import tipRoute from "./routes/tips.js";
import rooms from "./routes/rooms.js";
import multer from "multer";
import path from "path";
import cors from "cors";
const app = express();

dotenv.config();
app.use(express.json());
const __dirname = path.resolve();
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));
const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_APP);
        console.log("Connected to Mongoose")
      } catch (error) {
        throw error;
      }
}
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/pins", pinRoute);
app.use("/api/tips", tipRoute);
app.use("/api/admins", adminRoute);
app.use("/api/rooms",rooms);
app.use("/api/categories", categoryRoute);
app.listen(8800, ()=>{
    connect();
    console.log("Connect to backend...")
})