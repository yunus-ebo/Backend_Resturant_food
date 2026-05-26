import QrCode from "../models/qrModel";
import dotenv from "dotenv";
dotenv.config();

const createQr = async (req, res) => {
  try {
    const { type, tableNumber, originalUrl } = req.body;
    const qr = await QrCode.create({
      type,
      tableNumber,
      originalUrl,
    });
    res.status(201).json({
      success: true,
      // qrUrl: `${process.env.PROJECT_LINK}/${qr._id}`,
      qrUrl: `https://backend-resturant-food-1.onrender.com/qr/create`,
      data: qr,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// redirect عند المسح
const redirectQR = async (req, res) => {
  try {
    const qr = await QrCode.findById(req.params.id);
    if (!qr) {
      return res.status(404).json({ message: "qr not found" });
    }
    if (!qr.isActive) {
     return res.status(400).json({ message: "qr is disabled", success: false });
    }
    qr.clicks += 1;
    await qr.save();
    res.redirect(qr.originalUrl);
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

// QR عام
const getAllQRs = async (req,res) => {
  try {
    const qrs = await QrCode.find();
    res.status(200).json(qrs);
  } catch (error) {
    res.status(500).json({success:false, message:error.message});
  }
}
// QR مفرد
const singleQR = async (req,res) => {
    try {
        const qr = await QrCode.findById(req.params.id);
        res.status(200).json(qr);
    } catch (error) {
        res.status(500).json({success:false, message:error.message});
    }
}

const deleteQR = async (req,res) => {
    try {
        await QrCode.findByIdAndDelete(req.params.id);
        res.status(200).json({success:true, message:"qr deleted"});
    } catch (error) {
        res.status(500).json({success:false, message:error.message});
    }
}


export { createQr, redirectQR, getAllQRs, singleQR, deleteQR };


/*
INFO:
-- return: is important to stop excution of the function and not give null if there is no QR.
then : 
   qr.clicks += 1
   await qr.save()  // to save changes in DB 
   res.redirect(qr.originalUrl) // to send client to this Url

*/ 