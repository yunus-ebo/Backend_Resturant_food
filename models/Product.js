import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({  
    title:{
        type:String,
        maxLingth:20,
    },
    description:{
        type:String,
        maxLength:100,
    },
    category:String,
    price:Number,
    discount:Number,
    image:String,
    images:[String],
    icon:String
},{
    timestamps:true
}
)

const Product = mongoose.model("product",productSchema)
export default Product