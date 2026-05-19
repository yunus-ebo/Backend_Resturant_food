import express from 'express'
import upload from '../middleware/uploads.js'
import {getProducts,createProduct,deleteProduct} from '../controllers/productController.js'

const router = express.Router()

router.get("/", getProducts)
router.post("/",upload.fields([
    {name:"image",maxCount:1},
    {name:"images",maxCount:20},
    {name:"icons",maxCount:10},
]) ,createProduct)

router.post("/:id",deleteProduct)


export default router


/*
INFO:
1--
2-- "image": file name which comes from frontend and multer will compare it with (req.body.image) 

*/ 