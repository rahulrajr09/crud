const express = require('express');
const router = express.Router();
const path = require('path');



router.get('/products',(req,res,next) => {
    res.send("We have a various sort of products");
})

router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(__dirname,'..','Views','addProduct.html'));
})

router.post('/add-product',(req,res,next) => {
    const name = req.body;
    // res.send("Hi");
    res.send(name);
})


module.exports = router;