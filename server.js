// import dotenv from 'dotenv'
import express from "express";
import cors from "cors";
import path from "path";
import products from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import { fileURLToPath } from "url";
// dotenv.config();

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// من أجل ان تظهر الصور في المتصفح

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}));

app.use("/api/products", products);
// to show [Api is running...] instead of [CANNOT GET] in browser
app.get("/",(req,res) => {
    res.send("Api is running...")
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`this server is running on port ${PORT}`));

/*
INFO:
-- without these two lines of codes 👇 [path.dirname] will not work with [import] system 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
-- if only :
app.use('/uploads',express.static(path.join(__dirname, "uploads"))) .......
............
*/


/*
1-- mongodb+srv://programmerhacker001_db_user:programmer_mymongodb_001@yunus.upmy5lw.mongodb.net/?appName=yunus
2-- password: programmer_mymongodb_001

3-- https://backend-resturant-food-1.onrender.com
*/