// require('dotenv').config();

var cloudinary = require('./middleware/cloudinary');

cloudinary.uploader.upload("./public/imgs/sequoia2.jpg", 
    { width: 2000 },
    function(error, result) { console.log(result, error) });


