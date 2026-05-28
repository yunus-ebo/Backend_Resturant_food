import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import path from "path";
import products from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import qrRoutes from "./routes/qrRoutes.js";
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

// من أجل ان تظهر الصور في المتصفح
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/products", products);
app.use("/api/qr", qrRoutes);

// to show [Api is running...] instead of [CANNOT GET] in browser
app.get("/", (req, res) => {
  res.send("Api is running...");
});

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

// app.use(cors({
//     origin:["http://localhost:5173"],
//     credentials:true
// }));
