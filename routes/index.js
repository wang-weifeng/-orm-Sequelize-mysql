const express = require('express');
const router = express.Router();
const Seq = require('../config/db');

/* GET home page. */
router.get('/', (req, res, next) => {
    Seq.User.sync({ force: true }).then(() => {
        // Table created
        return Seq.User.create({
            firstName: 'John',
            lastName: 'Hancock'
        });
    });
    Seq.Post.sync({ force: true }).then(() => {
        // Table created
        return Seq.Post.create({
            firstName: 'John',
            lastName: 'Hancock'
        });
    });
    res.render('index', { title: 'Express' });
});

module.exports = router;
