const mongoose = require('mongoose');

const Schema = mongoose.Schema;


//Create Schema

const PropertySchema = new  Schema({
    propertytitle: {
        type: String,
        required: true
    },
    for: {
        type: String,
        required: true
    },
    bedrooms: {
        type: String,
        required: true
    },
    bathrooms: {
        type: String,
        required: true
    },
    garage: {
        type: Boolean,
        required: true
    },
    lounge: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    priceUnit:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    areaUnit:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false
        }
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = Users = mongoose.model('properties', PropertySchema);