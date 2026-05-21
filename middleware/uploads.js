import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb === call back
    try {
      if (file.fieldname === "images" || file.fieldname === "image") {
        // cb(null, "uploads/products");
        cb(null, path.join(__dirname, "uploads/products"));
      } else if (file.fieldname === "icon") {
        // cb(null, "uploads/icons");
        cb(null, path.join(__dirname, "uploads/icons"));
      } else {
        cb(new Error("invalid field"));
      }
    } catch (error) {
      cb(error);
    }
  },
  filename: function (req, file, cb) {
    try {
      const uniqueName = Date.now() + path.extname(file.originalname);
      cb(null, uniqueName);
    } catch (error) {
      cb(error);
    }
  },
});

const fileFilter = (req, file, cb) => {
  try {
    const allowedTypes = /jpg|jpeg|png|webp/;
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase(),
    );
    const mimeType = allowedTypes.test(file.mimeType);
    if (extname && mimeType) {
      cb(null, true);
    } else {
      cb(new Error("only images are allowed"));
    }
  } catch (error) {
    cb(error);
  }
};
const upload = multer({
  storage,
  fileFilter,
});
export default upload;

/*
INFO:
-- file: comes from client
-- names of { image,images,icons } must match names in the route
if we upload: field name = images , will save at ( /uploads/products ) and so on...

*/