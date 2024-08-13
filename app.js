let path = process.argv[2];
let width =  Number(process.argv[3]);

function rezise(path, width) {
    let sharp = require('sharp');
    sharp(path)
        .resize(width)
        .toFile('output.jpg', (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
}