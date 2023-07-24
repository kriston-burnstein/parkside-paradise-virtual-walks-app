var cloudinary = require('./middleware/cloudinary');

cloudinary.uploader.upload("./public/imgs/sequoia2.jpg", 
    { width: 2000, format: "webp" },
    function(error, result) { console.log(result, error) });


// reimplement and test after cloudinary cookies issues resolved 
    // cloudinary.uploader.upload("./public/imgs/pier.jpg", 
    // { width: 2000, format: "webp" },
    // function(error, result) { console.log(result, error) });

    // cloudinary.uploader.upload("./public/imgs/tree.jpg", 
    // { width: 2000, format: "webp" },
    // function(error, result) { console.log(result, error) });

