const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/about.html"));
});

router.get('/courses', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/courses.html"));
});



module.exports = router;