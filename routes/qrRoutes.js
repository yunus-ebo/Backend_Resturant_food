import {createQr, getAllQRs, singleQR, redirectQR, deleteQR} from '../controllers/qrController';
import express from 'express';

const router = express.Router();
router.post("/create", createQr);
router.get("/", getAllQRs);
router.get("/:id", redirectQR);
router.get("/single/:id", singleQR);
router.delete("/:id", deleteQR);

export default router;