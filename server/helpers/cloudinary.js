const cloudinary = require("cloudinary").v2;
const multer = require("multer");
require("dotenv").config("../.env");
const { CLOUDINARY_API_KEY, CLOUDINARY_CLIENT_ID } = process.env;
cloudinary.config({ 
  cloud_name: 'dvw3km9ob', 
  api_key: CLOUDINARY_CLIENT_ID, 
  api_secret: CLOUDINARY_API_KEY,
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
