import CloudinaryPackage from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const cloudinary = CloudinaryPackage.v2;

// configuration for cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

// storage engine for multer
const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png", "jpeg"],
  params: {
    folder: "afghan-Ecommerce",
  },
});

// init multer with storage engine
const upload = multer({
  storage,
});
export default upload;
