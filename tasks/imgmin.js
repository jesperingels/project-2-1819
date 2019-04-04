const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

const webp = require("imagemin-webp");

imagemin(['public/img/*.jpg', 'public/img/*.png'], "public/img", {
    use: [
        webp({
            quality: 75
        })
    ]
});


(async () => {
    const files = await imagemin(['public/img/*.{jpg,png}'], 'public/img', {
        plugins: [
            imageminJpegtran({quality: 35})
        ]
    }).then(function() {
        console.log("Images converted!");
    });

})();