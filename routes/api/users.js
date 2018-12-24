const express = require('express');
const router = express.Router();

const Users = require('../../models/users');

router.get('/', (req, res) => {
    Users.find()
        .then(users => res.json(users));
});

module.exports = router;