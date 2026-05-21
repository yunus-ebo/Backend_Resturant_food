import Product from "../models/Product.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: "product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      discount: req.body.discount,
      image: req.file.image
        ? `uploads/products/${req.file.image[0].filename}`
        : "",
      images: req.body.images
        ? req.body.images.map((file) => `uploads/products/${file.filename}`)
        : [],
      icon: req.body.icon ? `uploads/icons/${req.file.icon[0].filename}` : "",
    });
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.body.id);
    if (!product) {
      res.status(404).json({ message: "product not found" });
    } else {
      res.status(200).json({ message: "product has been deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

export { getProducts, getProductById, createProduct, deleteProduct };
