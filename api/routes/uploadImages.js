const multer = require('multer');
const express = require("express");
const router = express.Router();
// const path = require('path');
// const fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/upload/images');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
        //  addPhotosToDB(req.query.uid,file.originalname)
    }
});

var upload = multer({storage: storage}).any();


router.post('/', function (req, res) {
    upload(req, res, function (err) {
        //console.log(req.body);
        //console.log(req.files);
        if (err) {
            return res.end("Error uploading file.");
        }
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end("File is uploaded");
    });
});
module.exports = router;