const mongoose = require('mongoose');

const Schema = mongoose.Schema;


//Create Schema

const UserSchema = new  Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

module.exports = Users = mongoose.model('users', UserSchema);