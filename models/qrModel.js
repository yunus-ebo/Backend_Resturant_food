import mongoose from 'mongoose';

const qrSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    websiteUrl:{
        type:String,
        required:true
    },
    qrCode:{
        type:String,
    }
},
{timestamps:true}
);

const qrModels = mongoose.model("qrCode",qrSchema);
export default qrModels;