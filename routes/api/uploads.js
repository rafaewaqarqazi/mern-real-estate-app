const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Property = require('../../models/property');
const storage = multer.diskStorage({
    destination: './client/public/uploads/',
    filename: function (req, file, cb) {
        cb(null,file.fieldname + '-' +Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
}).single("image");

router.post('/image', (req, res) => {
    upload(req, res, (err) => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file);//Here you get file.
        /*Now do where ever you want to do*/
        if (err){
            console.log(err);
        }
        if(!err)
            return res.send(200).end();
    });
});
router.post('/property',(req, res)=>{

    console.log(JSON.stringify(req.body));

    const newProperty = new Property({
        propertytitle:req.body.propertytitle,
        for:req.body.for,
        bedrooms:req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        garage: req.body.garage,
        lounge: req.body.lounge,
        price:  req.body.price,
        image:req.body.image,
        location:{
            type: "Point",
            coordinates:[
                req.body.latitude,
                req.body.longitude
            ]
        },
        description: req.body.description
    });
    newProperty.save().then(docs => res.json(docs));
});
module.exports = router;