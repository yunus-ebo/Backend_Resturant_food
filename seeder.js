import { products } from "./data.js";
import Product from "./models/Product.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();

const importProducts = async () => {
  try {
    await Product.insertMany(products);
    console.log("products imported");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const removeProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("products removed");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-import") {
  importProducts();
} else if (process.argv[2] === "-remove") {
  removeProducts();
}

/*
Question:
1-- What does it mean ? 
import {argv} from 'node:process'
argv.forEach((value,index) => {
    console.log(`${index}: ${value}`)
})

*/