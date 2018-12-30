const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Property = require('../../models/property');
const storage = multer.diskStorage({
    destination: './client/public/uploads/',
    filename: function (req, file, cb) {
        cb(null,file.originalname);
    }
});

const upload = multer({
    storage: storage
}).single("image");

router.post('/image', (req, res) => {
    upload(req, res, (err) => {
        if (err){
            console.log(err);
        }
        if(!err)
            return res.send(200).end();
    });
});
router.post('/property',(req, res)=>{

    const newProperty = new Property({
        propertytitle:req.body.propertytitle,
        for:req.body.for,
        bedrooms:req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        garage: req.body.garage,
        lounge: req.body.lounge,
        price:  req.body.price,
        priceUnit:req.body.priceUnit,
        area:req.body.area,
        areaUnit:req.body.areaUnit,
        contact:req.body.contact,
        email:req.body.email,
        image:req.body.image,
        address:req.body.address,
        city:req.body.city,
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