const express = require('express');
const router = express.Router();

// Routes

router.get('', (req, res) => {
    const locals = {
        title: "Kyle's NodeJs Blog",
        description: "My first simple blog created with NodeJs, ExpressJs and MonggoDb."
    }
    res.render('index', { locals });
    // res.render('index', locals); you can remove the curly brace if you're not passing multiple objects
});

router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;