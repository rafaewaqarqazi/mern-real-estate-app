const express = require('express');
const router = express.Router();
const Property = require('../../models/property');


router.get('/all', (req, res) => {
    Property.find().then(properties => res.send(properties));
});

router.get('/recent',(req, res)=>{
    Property.find()
        .sort({_id:-1})
        .limit(4)
        .then(properties => res.send(properties));

});

router.get('/:id',(req, res)=>{
    const id = req.params.id;

    Property.findById(id).then(property => res.json(property))
        .catch(err => console.log(err));
});
module.exports = router;