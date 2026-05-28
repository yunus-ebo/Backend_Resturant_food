import { createQr, getQr } from "../controllers/qrController.js";
import express from "express";

const router = express.Router();

router.post("/create", createQr);
router.get("/", getQr);


export default router;