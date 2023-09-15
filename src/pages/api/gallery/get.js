const path = require('path');
const fs = require('fs')


export default async function (req, res) {

    try{
        let images = fs.readdirSync(path.resolve(__dirname, '../../../../../public/gallery'));
        // let imagesReordered = reorder(images)
        res.status(200).json(images);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


function reorder(arr) {
    const cols = 3;
    const out = [];
    let col = 0;
    while(col < cols) {
        for(let i = 0; i < arr.length; i += cols) {
            let _val = arr[i + col];
            if (_val !== undefined)
                out.push(_val);
        }
        col++;
    }
    return out
}