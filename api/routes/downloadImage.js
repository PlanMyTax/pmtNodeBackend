// const multer = require('multer');
const express = require("express");
const router = express.Router();
const path = require('path');
const fs = require('fs');

// //Handler for fetching the Image Name
router.post('/:file(*)', (req, res) => {
    console.log("inside download file");
    var file = req.params.file;
    var temp_path = "/Users/Raghvendra/Desktop/My_courses/SJSU Courses/Semester 3/CMPE- 273- Prof Shim/Labs/Lab-2/Homeaway/Backend/public/upload/images";
    var fileLocation = path.join(temp_path, file);
    var img = fs.readFileSync(fileLocation);
    var base64img = new Buffer(img).toString('base64');
    res.writeHead(200, {'Content-Type': 'image/jpg'});
    res.end(base64img);
});

module.exports = router;