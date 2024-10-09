import multer from "multer";
import fs from 'fs';
import path from 'path';

// Define the storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'upload/';


        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });  
        }

        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);  
    }
});

// Create upload middleware
const uploadProductImage = multer({ storage: storage });

export default uploadProductImage;
