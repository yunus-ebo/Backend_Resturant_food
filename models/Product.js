import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({  
    title:{
        type:String,
        maxLingth:20,
    },
    descriptions:[String],
    description:{
        type:String,
        maxLength:100,
    },
    category:String,
    price:Number,
    discount:Number,
    image:String,
    images:[{
        image:String,
        item:String,
        description:{
            type:String,
            maxLength:300
        }
    }],
    icon:String,
    slug:String
},{
    timestamps:true
}
)

const Product = mongoose.model("product",productSchema)
export default Product

/*
INFO:
-- if you want to add objects inside the value of images don't write => images:[String] but write
images[{
 image:String,
 title:String
}]  

*/ 