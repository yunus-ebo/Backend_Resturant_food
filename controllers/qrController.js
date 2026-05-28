import qrModels from '../models/qrModel.js'
import QrCode from 'qrcode';

// للموقع QR انشاء
const createQr = async (req,res) => {
    try {
        const {name, websiteUrl} = req.body;
        // QR انشاء
        const qrCode = await QrCode.toDataURL(websiteUrl);
        // حفظ في قاعدة البيانات
        const restaurantQr = await qrModels.create({
            name,
            websiteUrl,
            qrCode
        });
        res.status(201).json({success:true,restaurantQr})
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

const getQr = async () => {
    try {
        const restaurantQr = await qrModels.findOne();
        if(!restaurantQr){
            return res.status(404).json({message:"data not found"})
        }
        res.status(200).json({success:true,restaurantQr})
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}


export {
    createQr,
    getQr
}