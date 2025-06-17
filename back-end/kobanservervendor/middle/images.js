import multer from "multer";
import path from "path";
//import fs from 'fs'

const stockImagesProd = multer.diskStorage({
    destination: path.resolve("./public/images/productsimage"),
    filename: (req, file, cb) => {
        const prodName = Date.now()+ '-' + file.originalname;
        cb(null, prodName);
    }
    // file des images par type
})


const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Vérifier votre fichier image');
  }
};

const sauvegardeimage  = multer({
    storage: stockImagesProd,
    limits: { fileSize: 5000000},
    fileFilter: fileFilter
})

export default sauvegardeimage