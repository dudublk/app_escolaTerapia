'use strict';
const multer = require('multer');
const path = require('path')
module.exports = (
   multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null, './public/upload/imgcapa')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString().replace(/:/g, '_') + "_" + file.originalname)
        }
    }),
    fileFilter: (req, file, cb) =>{
        const extenaoImg = ['image/jpg', 'image/jpeg', 'image/png'].find
        (formatoAceito => formatoAceito == file.mimetype);

        if (extenaoImg){
            return cb(null, true);
        }

        return cb(null, false);
    }
   })
)