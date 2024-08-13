const sharp = require('sharp');
let path = process.argv[2];
let width =  Number(process.argv[3]);

function rezise(path, width) {
    sharp(path)
        .resize({ width: width })
        .toFile('./temp/output_resize.jpg', (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Imagem redimensionada com sucesso!");
            }
        });
}

rezise(path, width);