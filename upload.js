var cloudinary = require('./middleware/cloudinary');

cloudinary.uploader.upload("./public/imgs/sequoia2.jpg", 
    { width: 2000, format: "webp" },
    function(error, result) { console.log(result, error) });


// try even smaller width and see if quality stays intact but the stutter load is less noticeable - no, tried 1000w, degrades image too much

// can I add f_auto and q_auto:best in the EJS url??! test load time and test quality too - no, having the params in the ejs url is WHAT makes it so slow to load. tried it and it was like 2-3 second load, but then did flash in as a whole image

// can I change to f_webp format here, what does the quality do? load time? - MAYBE, I FIRST TRIED THIS INADVERTENTLY WITH 1000 WITH IMAGE AND it works, and it was FAST, like popped in, but it's a little lossy, maybe just a tiny bit. TRY AGAIN WITH 2000 WIDTH

//going to deploy to heroku and check numbers and load. khb url is the one to use to go back to original 2000 width image if I want to revert back to that. 

// add other 2 images in this code, leave the lazy load on those